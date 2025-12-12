import { CrudBase } from "@/shared/lib/crud-base";
import { Deal } from "../types/deal.types";

class DealsService extends CrudBase<Deal> {
  constructor() {
    super("/direct-deals");
  }

  /**
   * Add a new deal (requires FormData for images)
   */
  async addDeal(formData: FormData) {
    return this.custom("/add", "POST", {
      data: formData as any,
      isFormData: true,
    });
  }

  /**
   * Update an existing deal
   */
  async updateDeal(dealId: string | number, formData: FormData) {
    return this.update(dealId, formData as any, true);
  }
}

export const dealsService = new DealsService();
