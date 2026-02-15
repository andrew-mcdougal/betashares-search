export interface SearchResult {
  id: string;
  symbol: string;
  display_name: string;
  one_year_return?: number;
  five_year_return?: number;
  fund_size?: number;
  management_fee?: number;
  management_approach?: string;
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
}

export interface SearchParams {
  searchText: string;
  page: number;
  pageSize: number;
  orderBy?: string;
  filters?: {
    management_approach?: string[];
    // future filters can be added here
  }
}

export interface SearchState {
  results: SearchResult[];
  total: number;
  loading: boolean;
  error: string | null;
}
