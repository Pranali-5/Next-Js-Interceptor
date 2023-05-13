"use client"
import React, { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from "next/navigation";
import ProductImage from '@/components/ProductImage';
// import Modal from '@/components/Modal';
import { Modal } from '@mantine/core';
type Props = {
  params: {
    id: string;
  };
};
function ModalPage({ params: { id }}: Props) {
    let [isOpen, setIsOpen] = useState(true);
    const [product, setProduct] = useState<any>();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const overlay = useRef();

    useEffect(() => {
      async function fetchProduct() {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const product = await res.json();
  
        setProduct(product);
  
        setLoading(false);
      }
  
      fetchProduct();
    }, [id]);
    
  return (
    <Modal
    opened={isOpen}
    onClose={() => {
      setIsOpen(false);
      router.back();
    }} 
    size="50%"
    >
      <div>
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
            {loading ? (
              <div className="h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin" />
            ) : (
              <div className="flex gap-x-8 h-96">
                {product?.thumbnail && (
                  <div className="relative w-72 h-full hidden md:inline">
                    <ProductImage product={product} fill />
                  </div>
                )}
                <div className="flex min-h-full items-center justify-center p-4">
                  <div className="flex-1">
                    <h4 className="font-semibold">{product?.title}</h4>
                    <p className="font-medium text-sm">${product?.price}</p>

                    <div className="flex items-center text-sm my-4">
                      <p>{product?.rating.rate}</p>
                      {product?.rating.rate && (
                        <div className="flex items-center ml-2 mr-6">
                          {/* Display 5 stars but display the rate ones as StarIconOutline  */}
                          {/* {Array.from(
                            { length: Math.floor(product.rating.rate) },
                            (_, i) => (
                              <StarIcon
                                key={i}
                                className="h-4 w-4 text-yellow-500"
                              />
                            )
                          )} */}

                          {/* Display the rest of the stars as StarIconOutline  */}
                          {/* {Array.from(
                            { length: 5 - Math.floor(product.rating.rate) },
                            (_, i) => (
                              <StarIconOutline
                                key={i}
                                className="h-4 w-4 text-yellow-500"
                              />
                            )
                          )} */}
                        </div>
                      )}
                    </div>

                    <p className="line-clamp-5 text-sm">
                      {product?.description}
                    </p>
                    <div className="text-md">
                      <br/>
                    <button
                      onClick={() => window.location.reload()}
                      className="button w-200 bg-transparent color-blue hover:border-transparent"
                    >
                      View full details
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </Modal>
  )
}
export default ModalPage;
