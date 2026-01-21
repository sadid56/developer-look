import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllNews = ({ category = "news", search = "", ln = "all" }) => {
  const {
    data = [],
    isLoading,
    isFetched,
    isError,
    error,
  } = useQuery({
    queryKey: ["all-news", category, search, ln],
    queryFn: async () => {
      const res = await axios.get(`/api/all?category=${category}&search=${search}&ln=${ln}`);
      return res?.data?.result;
    },
  });
  return { data, isLoading, isFetched, isError, error };
};

export default useAllNews;
