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

    // getData returns { code, success, data }
    // The actual API response is in response.data
    if (response?.success && response?.data?.code === 200) {
      return response.data.data; // Return the nested data object
    }

    return null;
  } catch (error) {
    console.error("Error fetching settings:", error);
    return null;
  }
}
