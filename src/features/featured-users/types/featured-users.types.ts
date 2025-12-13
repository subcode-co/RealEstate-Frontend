export interface FeaturedUser {
  id: number | string;
  name: string;
  type: string;
  address: string;
  description: string;
  logoUrl: string;
}

export interface FeaturedUsersResponse {
  data: FeaturedUser[];
  meta?: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}
