import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCountryNews = (country = "us") => {
  const { data, isLoading, isFetched, isError, error } = useQuery({
    queryKey: ["countryNews", country],
    queryFn: async () => {
      const res = await axios.get(`/api/news?country=${country}`);
      return res.data;
    },
  });

  return { data, isLoading, isFetched, isError, error };
};

export default useCountryNews;
