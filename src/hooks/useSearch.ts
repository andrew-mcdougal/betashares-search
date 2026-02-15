import { useState, useEffect, useCallback } from "react";
import type { SearchParams, SearchState, SearchResult } from "../types/search";
import { fetchSearch } from "../api/search";
import { useDebounce } from "./useDebounce";

/**
 * useSearch hook
 * Handles:
 * - debounced search text
 * - API calls
 * - loading & error state
 * - pagination
 * - filters & ordering
 */

export function useSearch(initialParams?: Partial<SearchParams>) {
  // -----------------------------
  // State for search parameters
  // -----------------------------
  const [params, setParams] = useState<SearchParams>({
    searchText: "", // The text the user types
    page: 1, // Current page number for pagination
    pageSize: 15, // Number of results per page
    ...initialParams, // Allow passing custom defaults
  });

  // -----------------------------
  // State for search results
  // -----------------------------
  const [state, setState] = useState<SearchState>({
    results: [], // Array of search results from API
    total: 0, // Total number of results
    loading: false, // True while waiting for API response
    error: null, // Error message if API call fails
  });

  // -----------------------------
  // Debounce the search text
  // -----------------------------
  // Prevents firing API on every keystroke
  const debouncedSearchText = useDebounce(params.searchText, 300);

  // -----------------------------
  // Function to fetch results from API
  // -----------------------------
  const fetchResults = useCallback(async () => {
    // Set loading state before API call
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // Build API payload based on current params
      const payload = {
        search_text: debouncedSearchText,
        from: (params.page - 1) * params.pageSize + 1, // API expects 1-based index
        size: params.pageSize,
        order_by: params.orderBy,
        ...params.filters, // Spread in any filter options
      };

      // Call the centralized API function
      const data = await fetchSearch(payload);

      // log a result to see what data looks like
      console.log("API response:", JSON.stringify(data.results[0], null, 2));

      // Artificial delay
      await new Promise(resolve => setTimeout(resolve, 500)); // 500ms delay

      // Update state with results
      setState({
        results: data.results ?? [], // fallback empty array
        total: data.count ?? 0, // fallback total
        loading: false,
        error: null,
      });
    } catch (err: any) {
      // Handle errors gracefully
      setState((prev) => ({ ...prev, loading: false, error: err.message }));
    }
  }, [
    debouncedSearchText,
    params.page,
    params.pageSize,
    params.orderBy,
    params.filters,
  ]);

  // -----------------------------
  // Effect: trigger fetch whenever relevant params change
  // -----------------------------
  useEffect(() => {
    fetchResults();
  }, [fetchResults]); // fetchResults is memoized, so effect only fires when its dependencies change

  // -----------------------------
  // Return hook API to components
  // -----------------------------
  return {
    params, // Current search parameters
    setParams, // Setter to update parameters (searchText, page, filters)
    results: state.results,
    total: state.total,
    loading: state.loading,
    error: state.error,
  };
}
