import { useQuery } from "@tanstack/react-query";
import type { Skip } from "../Types";

const fetchSkipsByLocation = async (
  postcode: string,
  area: string
): Promise<Skip[]> => {
  const response = await fetch(
    `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${encodeURIComponent(
      postcode
    )}&area=${encodeURIComponent(area)}`
  );

  if (!response.ok) {
    throw new Error(`Error ${response.status}: Failed to fetch skips`);
  }

  return response.json();
};

export const useSkipsByLocation = (postcode: string, area: string) => {
  return useQuery<Skip[], Error>({
    queryKey: ["skips", postcode, area],
    queryFn: () => fetchSkipsByLocation(postcode, area),
    enabled: !!postcode && !!area,
    staleTime: 1000 * 60 * 5, 
    retry: 3,
    retryDelay: 1000, 
  });
};
