// Property/Estate feature types

export interface Property {
  id: number;
  title: string;
  description?: string;
  price: number;
  location?: string;
  images?: string[];
  type?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  slug?: string;
  [key: string]: any;
}

export interface PropertyFilters {
  page?: number;
  per_page?: number;
  type?: string;
  city?: string;
  min_price?: number;
  max_price?: number;
  bedrooms?: number;
  bathrooms?: number;
  operation_type?: string;
  finishing_type?: string;
  [key: string]: any;
}
