import { CrudBase } from "@/shared/lib/crud-base";
import { getData } from "@/shared/lib/fetch-methods";
import { Settings } from "../types/settings.types";

class SettingsService extends CrudBase<Settings> {
  constructor() {
    super("/settings");
  }

  /**
   * Get site settings
   */
  async getSettings() {
    return this.custom("", "GET");
  }

  /**
   * Get topnav color
   * @returns Color string or default
   */
  async getTopnavColor(): Promise<string> {
    // Call /topnav-color directly (not under /settings)
    const response = await getData<any>({
      url: "/topnav-color",
    });
    // The API response structure is: { success, data: { success, data: { topnavColor: "#xxx" } } }
    return response?.success && response?.data?.data?.topnavColor
      ? response.data.data.topnavColor
      : "#1a1a1a";
  }
}

export const settingsService = new SettingsService();
