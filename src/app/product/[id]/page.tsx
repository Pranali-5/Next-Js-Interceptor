"use client"

import { Card } from "@/components/Card";
type Props = {
    params: {
      id: string;
    };
  };
 function ProductPage({ params: { id } }: Props) {
    return (<>
     <Card id={id}/>
      </>
    );
}

export default ProductPage;
