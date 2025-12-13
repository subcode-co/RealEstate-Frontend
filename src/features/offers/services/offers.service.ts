import { CrudBase } from "@/shared/lib/crud-base";
import { Offer } from "../types/offer.types";

class OffersService extends CrudBase<Offer> {
  constructor() {
    super("/offers");
  }

  /**
   * Get all offers
   * @returns Array of offers
   */
  async getOffers(): Promise<Offer[]> {
    const response = await this.getAll();
    return response?.success && response?.data
      ? Array.isArray(response.data)
        ? response.data
        : response.data.data || []
      : [];
  }

  /**
   * Get offer by ID
   * @param id - Offer ID
   * @returns Offer or null
   */
  async getOfferById(id: string | number): Promise<Offer | null> {
    const response = await this.getById(id);
    return response?.success && response?.data ? response.data : null;
  }
}

export const offersService = new OffersService();
