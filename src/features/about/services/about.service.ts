import { CrudBase } from "@/shared/lib/crud-base";
import { AboutData } from "../types/about.types";

class AboutService extends CrudBase<AboutData> {
  constructor() {
    super("/about");
  }

  async getAboutData(): Promise<AboutData | null> {
    const response = await this.custom("", "GET", { revalidate: 0 });
    // The API response is wrapped by getData: { code, success, data: { success, data: { sections } } }
    // So we need to access response.data.data to get the actual about data
    return response?.success && response?.data?.data
      ? response.data.data
      : null;
  }
}

export const aboutService = new AboutService();
