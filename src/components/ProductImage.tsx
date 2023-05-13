"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  product: any;
  fill?: boolean;
};

function ProductImage({ product, fill }: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <>
     {/* ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          } */}
      {fill ? (
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 
         
        }`}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 
        }`}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  );
}

export default ProductImage;