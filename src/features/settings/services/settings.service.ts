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
}

export const settingsService = new SettingsService();
