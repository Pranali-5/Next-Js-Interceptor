import { CardsCarousel } from "@/components/CardsCarousel";
import axios from "axios";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
type Props = {
      id: string;
  };
export const Card = ({id}: Props) => {
    // const res = await fetch(`https://dummyjson.com/products/${id}`);
    const [data, setData] = useState<any>({});
    const [isLoading, setIsLoading] = useState(false);

    const handleApi = async ()=>{
      setIsLoading(true)
      await axios
      .get(
        `https://dummyjson.com/products/${id}`
      )
      .then((response: any) => {
        if(response.status == 200){
            setData(response?.data);
            setIsLoading(false)
        }
        else {
            notFound();
        }
      })
  }
  useEffect(()=>{
    handleApi();
  },[id])

  return (
   <>
   {isLoading ? '' :
    <>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
        {/* <Image src={image} height={180} className={classes.image} alt={'product'}/> */}
        <div className="divide-y">
          <div className="space-y-2 pb-8">
            <h1 className="text-2xl md:text-4xl font-bold">{data.title}</h1>
            <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
              ${data?.price}
            </h2>
          </div>

          <div className="pt-8">
            <p className="text-xs md:text-sm">{data.description}</p>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', width: 700, justifyContent: 'center', alignItems: 'center'}}>
      {isLoading ? null : <CardsCarousel data={data?.images}/>}
      </div>
      </>
      }
   </>
  )
}
