export interface SearchResult {
  id: string;
  symbol: string;
  display_name: string;
  one_year_return?: number;
  five_year_return?: number;
  fund_size?: number;
  management_fee?: number;
  management_approach?: string;
  investment_suitability?: string[];
  categories?: string[];
  dividend_frequency?: string[];
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
}

export interface SearchParams {
  searchText: string;
  page: number;
  pageSize: number;
  orderBy?: {
    field: "symbol" | "display_name" | "fund_size" | "management_fee";
    direction: "asc" | "desc";
  };
  filters?: {
    management_approach?: string[];
    fund_size?: {
      min?: string;
      max?: string;
    };
    management_fee?: {
      min?: string;
      max?: string;
    };
    investment_suitability?: string[];
    categories?: string[];
    dividend_frequency?: string[];
  };
}

export interface SearchState {
  results: SearchResult[];
  total: number;
  loading: boolean;
  error: string | null;
}
