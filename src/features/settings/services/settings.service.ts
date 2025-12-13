import { CrudBase } from "@/shared/lib/crud-base";
import { Settings } from "../types/settings.types";

class SettingsService extends CrudBase<Settings> {
  constructor() {
    super("/settings");
  }

  /**
   * Get site settings
   * Settings are cached for 1 hour by default
   */
  async getSettings() {
    return this.custom("", "GET", {
      revalidate: 3600, // Cache for 1 hour
    });
  }

  /**
   * Get topnav color
   * @returns Color string or default
   */
  async getTopnavColor(): Promise<string> {
    const response = await this.custom("/topnav-color", "GET", {
      revalidate: 0,
    });
    return response?.success && response?.data?.color
      ? response.data.color
      : "#000000";
  }
}

export const settingsService = new SettingsService();
