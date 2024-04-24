import { useEffect } from "react";

export const useTitle = (currentPage) => {
  useEffect(() => {
    document.title = currentPage + "-Write Note";
  }, [currentPage]);
  return null;
}
