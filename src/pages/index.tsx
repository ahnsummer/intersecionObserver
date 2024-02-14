import { useEffect, useState } from "react";

import Item, { Product } from "@/components/item";
import { generateFakeProducts } from "@/utils/faker";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fakeProducts = generateFakeProducts(1000);
    setProducts(fakeProducts);
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
