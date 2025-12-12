// Properties feature exports
export { propertiesService } from "./services/properties.service";
export {
  useProperties,
  useProperty,
  usePropertyBySlug,
  useFeaturedProperties,
  useSimilarProperties,
  useCreateProperty,
} from "./hooks/use-properties";
export { propertySchema } from "./schemas/property.schema";
export type { Property, PropertyFilters } from "./types/property.types";
export type { PropertyFormData } from "./schemas/property.schema";

// Note: Estate components (estate-card, estates-filter, etc.) remain in src/components/estates/
// They can be moved here later if needed for better feature isolation
