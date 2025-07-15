import { useEffect, useRef } from "react";
import debounce from "@/utils/debounce";

interface UseInfiniteScrollProps {
  onLoadMore: () => void;
  loading: boolean;
}

const useInfiniteScroll = ({ onLoadMore, loading }: UseInfiniteScrollProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (loading) return;

    const debouncedLoadMore = debounce(onLoadMore, 300);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          debouncedLoadMore();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [onLoadMore, loading]);

  return observerRef;
};

export default useInfiniteScroll;