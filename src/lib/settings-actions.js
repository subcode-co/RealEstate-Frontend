import { getData } from "./fetch-methods";

/**
 * Fetch site settings from the API
 * @returns {Promise<Object>} Settings data
 */
export async function getSettings() {
  try {
    const response = await getData({
      url: "/settings",
      revalidate: 3600, // Cache for 1 hour
    });

    if (response?.code === 200) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.error("Error fetching settings:", error);
    return null;
  }
}
