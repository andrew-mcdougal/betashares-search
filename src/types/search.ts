export interface SearchResult {
  id: string;
  symbol: string;
  display_name: string;
  one_year_return?: number;
  five_year_return?: number;
  fund_size?: number;
  management_fee?: number;
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
  filters?: Record<string, unknown>;
}

export interface SearchState {
  results: SearchResult[];
  total: number;
  loading: boolean;
  error: string | null;
}
