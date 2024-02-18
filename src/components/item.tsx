import Image from "next/image";

export type Product = {
  name: string;
  price: string;
  description: string;
  image: string;
};

const Item = ({ name, price, description, image }: Product) => {
  

  return (
    <div className="w-full h-full bg-gray-100 rounded-xl">
      <div className="w-full h-68">
        <Image
          className="w-full h-full rounded-t-xl"
          width={100}
          height={80}
          src={image}
          alt={name}
        />
      </div>
      <div className="w-full h-36 flex flex-col justify-between p-4">
        <div>
          <p className="font-semibold text-base">{name}</p>
          <p className="text-xs">{description}</p>
        </div>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Item;
