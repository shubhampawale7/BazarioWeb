import React from 'react'
import {Link ,useParams} from'react-router-dom'
import { useGetProductsQuery } from '../redux/api/productApiSlice'
import Loader from '../components/Loader'
import Header from '../components/Header'
import Message from '../components/Message'
import Product from './Products/Product'
 
const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>
    <div className='mt-7'></div>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="flex justify-between items-center  ">
            <h1 className="ml-[20rem] mt-[10rem] text-[3rem]">
              Special Products
            </h1>

            <Link
              to="/shop"
              className=" text-white bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
            >
              Shop
            </Link>
          </div>

          <div>
            <div className="flex justify-between flex-wrap mt-[2rem] ml-20">
              {data.products.map((product) => (
                <div  key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home