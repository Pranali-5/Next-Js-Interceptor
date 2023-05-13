"use client"
import axios from "axios"
import { HeaderMegaMenu } from '@/components/NavbarSimpleColored';
import { useEffect, useState } from "react"
import { Container, Flex, Grid } from "@mantine/core";
import { ProductCard } from '@/components/ProductCard';

//import FeaturedPosts from "../components/home-page/featured-posts"
function HomePage(){
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const handleApi = async ()=>{
    setIsLoading(true)
    await axios
    .get(
      'https://dummyjson.com/products'
    )
    .then((response: any) => {
        console.log('response:', response)
        setData(response?.data?.products);
        setIsLoading(false)
    })
}
useEffect(()=>{
    handleApi()
},[])
 return <>
    {/* <HeaderMegaMenu/> */}
    <Container my="md">
        <Grid  w={'100%'}>
    {isLoading ? '' :
      data.map((item: any, i)=>(
        <Grid.Col key={i} xs={4} h={400}>
        <ProductCard 
        image={item?.thumbnail} 
        title={item?.title} 
        description={item?.description} 
        rating={item?.rating}  
        id={item?.id}
        />
       </Grid.Col>
      ))
    }
    </Grid>
    </Container>
    {/* <FeaturedPosts/> */}
  </>
}
export default HomePage
