import { CrudBase } from "@/shared/lib/crud-base";
import { Package } from "../types/packages.types";

class PackagesService extends CrudBase<Package> {
  constructor() {
    super("/packages");
  }

  /**
   * Get all packages
   * @returns Array of packages or empty array
   */
  async getPackages(): Promise<Package[]> {
    const response = await this.custom("", "GET", { revalidate: 0 });
    // The API response is wrapped by getData: { code, success, data: { success, data: [...] } }
    // So we need to access response.data.data to get the actual array
    return response?.success && response?.data?.data ? response.data.data : [];
  }
}

export const packagesService = new PackagesService();
