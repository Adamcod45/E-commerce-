import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import generateData from "data-generator-retail";
import Navbar from "./Navbar/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
import Cart from "./Cart/Cart.jsx";
import './App.css'

function App() {
  const [product, setProduct] = useState([]);
  const [cartArray, setCartArray] = useState([]);
  const [count, setCount] = useState(0);

  const handleAdd = (items) => {
    // const curItem = cartArray.find(item => item.id === items.id);

    // if (curItem) {
    //   setProduct(prev => prev.map(item => item.id === items.id ? { ...item, addToCart: false } : item));
    //   setCartArray(prev => prev.filter(item => item.id !== items.id));
    // } else {
    //   setProduct(prev => prev.map(item => item.id === items.id ? { ...item, addToCart: true } : item));
    //   setCartArray(prev => [...prev, items]);
    // }

    // check if that item is already inside the cartArray
    const exists = cartArray.find((item) => item.id === items.id);
    console.log(exists);

    // iif yes , remove the person

    if (exists) {
      setCartArray((prev) => {
        const prevCart = [...prev].filter((item) => item.id !== items.id);

        return prevCart;
      });

      const newProduct = product.map((item, index) => {
        if (item.id === items.id) {
          item.isAdded = false;
        }

        return item;
      });

      setProduct(newProduct);
    } else {
      // if no , send the person to the cart Array
      setCartArray([...cartArray, items]);

      const newProduct = product.map((item, index) => {
        if (item.id === items.id) {
          item.isAdded = true;
        }

        return item;
      });

      setProduct(newProduct);
    }

    // change the isAdded of the current click to true
  };

  useEffect(() => {
    const data = generateData();
    const products = data.products.slice(0, 42);

    const newProducts = products.map((items, index) => {
      items.numberOfItems = 1;
      items.isAdded = false;

      return items;
    });

    setProduct(newProducts);
  }, []);

  const addItemFromCart = (items) => {
    console.log(items);

    // perform a map to increase the number by one
    const newCartArray = cartArray.map((item, index) => {
      if (items.id === item.id) {
        item.numberOfItems = item.numberOfItems + 1;
      }

      return item;
    });

    setCartArray(newCartArray);
  };

  const subItemFromCart = (items) => {
    console.log(items.numberOfItems);

    if (items.numberOfItems === 1) return 


    const newCartArray = cartArray.map((item, index) => {
      if (items.id === item.id) {
        item.numberOfItems = item.numberOfItems - 1;
      }

      return item;
    });

    setCartArray(newCartArray);
  };

  const removeItemFromCart = (items) => {
    // attempt to remove it from the cart

    setCartArray((prev) => {
      const newCart = [...prev].filter((item) => item.id !== items.id);

      return newCart;
    });

    // map through the product array and change the isAdded of that item to false

    const newProducts = product.map((cartItem) => {
      if (cartItem.id === items.id) {
        cartItem.isAdded = false;
      }

      return cartItem;
    });

    setProduct(newProducts);
  };

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
      <Navbar cartArray={cartArray} />
      <Routes>
        <Route
          path="/"
          element={<Hero products={product} handleAdd={handleAdd} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              products={cartArray}
              handleAdd={handleAdd}
              setCartArray={setCartArray}
              removeItemFromCart={removeItemFromCart}
              addItemFromCart={addItemFromCart}
              count={count}
              setCount={setCount}
              subItemFromCart={subItemFromCart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;