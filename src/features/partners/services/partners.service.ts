import { CrudBase } from "@/shared/lib/crud-base";
import { Partner } from "../types/partner.types";

class PartnersService extends CrudBase<Partner> {
  constructor() {
    super("/companies");
  }

  /**
   * Get all partners with pagination
   * @returns Array of partners or paginated response
   */
  async getPartners(page?: number, perPage?: number): Promise<Partner[]> {
    const response = await this.getAll({ page, per_page: perPage });
    return response?.success && response?.data
      ? Array.isArray(response.data)
        ? response.data
        : response.data.data || []
      : [];
  }

  /**
   * Get a single partner by ID
   * @param id - Partner ID
   * @returns Partner object or null
   */
  async getPartnerById(id: string | number): Promise<Partner | null> {
    const response = await this.getById(id);
    return response?.success && response?.data ? response.data : null;
  }
}

export const partnersService = new PartnersService();
