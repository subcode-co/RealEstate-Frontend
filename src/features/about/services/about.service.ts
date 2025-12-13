import { CrudBase } from "@/shared/lib/crud-base";
import { AboutData } from "../types/about.types";

class AboutService extends CrudBase<AboutData> {
  constructor() {
    super("/about");
  }

  async getAboutData(): Promise<AboutData | null> {
    const response = await this.custom("", "GET");
    return response?.success && response?.data ? response.data : null;
  }
}

export const aboutService = new AboutService();
