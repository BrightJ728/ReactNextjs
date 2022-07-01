import React, { useContext } from "react";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";
import { AuthContext } from "../../Usecontext/context";
import data from "../../data/data";
import CartSlidebar from "../Cart/cartSlidebar";
import ContextProvider from "../../Usecontext/context";
import Categories from "../categories";
import { useRouter } from "next/router";

const Products = () => {
  const auth = useContext(AuthContext);
  const [item, setData] = useState(data);
  
  //const [item, setData]=useState(data);
  const [categories, setCategories] = useState([]);


  const router = useRouter();
  const handleSearch = (data) => {
    auth.increment

    router.push({
      pathname: `products/${data.id}`,
      query: data,
    });
  };
  const filterProducts = (name_id) => {
    const newItem = data.filter((ite) => ite.name_id === name_id);
    setData(newItem);
  };

  const searchFilter = (name_id) => {
    const newItem = data.filter(
      (term) =>
        (term.name_id[0] === name_id[0]) | (term.name_id === name_id) | ""
    );
    setData(newItem);
  };

  return (
    <>
    <div className="product-container  inline-flex ">

      <Categories searchFilter={searchFilter} filterProducts={filterProducts} />

      <section className="">
        {item.map((data) => {
          const { id, name, name_id, price, image, description } = data;

          return (
              <article key={id} className="products ml-3  inline-block  ">
                <Image
                  src={image}
                  width={300}
                  height={200}
                  className=" image mr-0.5  "
                />
                <div className="align-center">
                  <h4>{name}</h4>
                  <p>{name_id}</p>
                  {price && <p> ${price} </p>}
                </div>
                <div className="product-icons ">
                  <button
                    onClick={() => handleSearch(data)}
                    className="product-icon"
                  >
                    <i className="GoSearch">
                      <GoSearch />
                    </i>
                  </button>

                  <button className="product-icon" onClick={auth.increment}>
                    <i>
                      <BsCart2 />
                    </i>
                  </button>
                </div>
              </article>
          );
        })}
      </section>
    </div>
    </>

  );

};

export default Products;
