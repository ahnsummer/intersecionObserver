import { useCallback, useEffect, useState } from "react";

import Item, { Product } from "@/components/item";
import { generateFakeProducts } from "@/utils/faker";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

type IntersectHandler = (
  /*
  This Intersection Observer API interface describes the intersection 
  between the target element and its root container at a specific moment of transition.
  */
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

const Home = (onIntersect: IntersectHandler) => {
  const [products, setProducts] = useState<Product[]>([]);
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  // const intersectionObserver = new IntersectionObserver(callback, {
  //   threshold: 0.5,
  // });

  useEffect(() => {
    setProducts(generateFakeProducts(1000));
  }, []);

  return (
    <main className="w-full h-full p-8">
      <div className="grid grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <Item
            key={idx}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
