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
    const response = await this.custom("", "GET", { revalidate: 0 });
    // The API response is wrapped by getData: { code, success, data: { success, data: {...} } }
    // So we need to access response.data.data to get the actual home data
    return response?.success && response?.data?.data
      ? response.data.data
      : null;
  }
}

export const homeService = new HomeService();
