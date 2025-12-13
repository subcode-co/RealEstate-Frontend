import { CrudBase } from "@/shared/lib/crud-base";
import { HomeData } from "../types/home.types";

class HomeService extends CrudBase<HomeData> {
  constructor() {
    super("/home");
  }

  /**
   * Get home page data
   * @returns Home page data or null
   */
  async getHomeData(): Promise<HomeData | null> {
    const response = await this.custom("", "GET");
    return response?.success && response?.data ? response.data : null;
  }
}

export const homeService = new HomeService();
