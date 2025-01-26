import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import generateData from "data-generator-retail";
import Navbar from './Navbar/Navbar.jsx';
import Hero from './Hero/Hero.jsx';

function App() {
  const [product, setProduct] = useState([]);
  const [cartArray, setCartArray] = useState([]);

  

  const handleAdd = (items) => {
    // const curItem = cartArray.find(item => item.id === items.id);

    // if (curItem) {
    //   setProduct(prev => prev.map(item => item.id === items.id ? { ...item, addToCart: false } : item));
    //   setCartArray(prev => prev.filter(item => item.id !== items.id));
    // } else {
    //   setProduct(prev => prev.map(item => item.id === items.id ? { ...item, addToCart: true } : item));
    //   setCartArray(prev => [...prev, items]);
    // }

    console.log(items)

    // check if that item is already inside the cartArray

    // iif yes , remove the person

    // if no , send the person to


  // change the isAdded of the current click to true
    const newProduct = product.map((item, index) => {
        if (item.id === items.id){
          item.isAdded = true
        }


        return item
        
    })

    setProduct(newProduct)
  };

  useEffect(() => {
    const data = generateData();
    const products = data.products.slice(0, 42);

    const newProducts = products.map((items, index) => {
      items.isAdded = false

      return items
    })

    setProduct(newProducts)
  }, []);



  // useEffect(() => {
  //   const data = generateData();
  //   const products = data.products;

  //   console.log(products);

  //   const arrSize = 42;
  //   const newArray = [];

  //   for (let i = 0; i < arrSize; i++) {
  //     newArray.push(products[i]);
  //   }
  //   setProduct(newArray);
  // }, []);

  return (
    <>
      <BrowserRouter>
      <Navbar cartArray={cartArray} />
        <Hero products={product} handleAdd={handleAdd} />
      </BrowserRouter>
    </>
  );
}

export default App;
