import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = process.env.NEXT_PUBLIC_NEWS_API_KEY;

const useCountryNews = (country = "") => {
  if (!api) {
    throw new Error("API key is not defined");
  }

  const { data, isLoading, isFetched, isError, error } = useQuery({
    queryKey: ["countryNews"],
    queryFn: async () => {
      try {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api}`);
        return res.data;
      } catch {
        throw new Error("Failed to fetch country news");
      }
    },
    // refetchInterval: 60000,
  });
  return { data, isLoading, isFetched, isError, error };
};

export default useCountryNews;
