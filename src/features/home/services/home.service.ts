import { getData } from "@/shared/lib/fetch-methods";
import { HomeData } from "../types/home.types";

class HomeService {
  /**
   * Get home page data
   */
  async getHomeData() {
    const response = await getData<HomeData>({
      url: "/home",
    });

    return response;
  }
}

export const homeService = new HomeService();
