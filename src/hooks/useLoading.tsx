import { useState, useCallback } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const resetApp = useCallback(() => {
    setIsLoading(true);
    setIsLoadingComplete(false);

    setTimeout(() => {
      setIsLoadingComplete(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 1000);
  }, []);

  return {
    isLoading,
    setIsLoading,
    isLoadingComplete,
    setIsLoadingComplete,
    resetApp,
  };
};
