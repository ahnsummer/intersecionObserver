// type IntersectHandler = {
//   /**
//    * target의 가시성을 확인할 때 사용되는 상위 속성 이름
//    * - null 입력 시, 기본값으로 브라우저의 Viewport가 설정됨
//    */
//   root?: Element | Document | null;
//   /**
//    * root에 마진값을 주어 범위를 확장 가능
//    * - 기본값은 0px 0px 0px 0px이며, 반드시 단위 입력 필요
//    */
//   rootMargin?: string;
//   /**
//    * 콜백이 실행되기 위해 target의 가시성이 얼마나 필요한지 백분율로 표시
//    * - 기본값은 배열 [0] 이며, Number 타입의 단일 값으로도 작성 가능
//    */
//   threshold?: number | number[];
// }

import { useCallback, useEffect, useRef } from "react";

type IntersectHandler = (
  /*
  This Intersection Observer API interface describes the intersection 
  between the target element and its root container at a specific moment of transition.
  */
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

const useIntersectionObserver = (
  onIntersect: IntersectHandler,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<HTMLDivElement>(null);

  // root와 target이 교차 상태인지 확인하는 isIntersectiong 값이 true이면 콜백을 실행하는 함수를 useCallback으로 선언
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref.current) return;

    // IntersectionObserver 객체 생성
    const observer = new IntersectionObserver(callback, options);
    // observe호출을 통해 target 요소 관찰 시작
    observer.observe(ref.current);

    // 컴포넌트가 언마운트 될 때는 cleanup을 통해 disconnect를 호출하여 모든 요소의 관찰을 중지
    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
};

export default useIntersectionObserver;
