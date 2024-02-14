import { faker } from "@faker-js/faker";

import { Product } from "@/components/item";

export const generateFakeProducts = (count: number): Product[] => {
  const fakeProducts: Product[] = [];

  for (let i = 0; i < count; i++) {
    const product: Product = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      image: faker.image.url(),
    };

    fakeProducts.push(product);
  }

  return fakeProducts;
};
