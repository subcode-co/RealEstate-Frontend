// Offer type
export interface Offer {
  id: number;
  title: string;
  description?: string;
  image?: string;
  discount?: string;
  validUntil?: string;
  [key: string]: any;
}
