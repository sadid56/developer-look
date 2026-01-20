import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllNews = ({ category = "news" }) => {
  const {
    data = [],
    isLoading,
    isFetched,
    isError,
    error,
  } = useQuery({
    queryKey: ["all-news", category],
    queryFn: async () => {
      const res = await axios.get(`/api/all?category=${category}`);
      return res?.data?.result;
    },
  });
  return { data, isLoading, isFetched, isError, error };
};

export default useAllNews;
