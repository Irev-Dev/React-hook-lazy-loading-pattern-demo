import { useState, useEffect } from "react";
import { useStore } from "./store";

export const useTabData = (
  tab: "sweet" | "rad"
): { data: string[]; loading: boolean; error: string } => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [state, dispatch] = useStore();
  const coolData = state && state.coolData && state.coolData[tab];
  const shouldFetchData = tab && !(coolData && coolData.length);

  const fetchData = async (tab: "sweet" | "rad") => {
    setIsLoading(true);
    const promise = new Promise<string[]>(resolve => {
      setTimeout(
        () => resolve(tab === "sweet" ? ["a", "b", "c", "d"] : ["x", "y", "z"]),
        3000
      );
    });
    const data = await promise;
    dispatch({
      type: "UPDATE_COOL_DATA",
      payload: {
        type: tab,
        data
      }
    });
    setIsLoading(false);
  };

  useEffect(() => {
    if (shouldFetchData) fetchData(tab);
  }, [tab, shouldFetchData]);
  return {
    data: coolData || [],
    loading: isLoading,
    error: ""
  };
};
