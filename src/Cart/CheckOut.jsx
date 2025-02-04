// const CheckOut = ({ products }) => {
//   const subtotalArray = products.map((item) => item.price * item.numberOfItems);

//   let totalPrice = 0;
//   for (let i = 0; i < subtotalArray.length; i++) {
//     totalPrice += subtotalArray[i];
//   }

//   return (
//     <div className="Checkout-cont">
//       {products.length === 0 && <p>No item is added yet</p>}
//       {products.map((items, index) => {
//         return (
//           <div className="Checkout" key={index}>
//             <div className="img_desc-cont">
//               <div className="h5">
//                 <img src={items.image} alt="" className="img" />
//                 <span>*{items.numberOfItems}</span>
//               </div>
//               <h4>Name: {items.reference}</h4>
//               <h4>Price: ${items.price}</h4>
//               <h6>Sub-total: ${items.price * items.numberOfItems}</h6>
//             </div>
//           </div>
//         );
//       })}

//       <footer>
//         Total: ${Math.floor(totalPrice * 100) / 100}
//         <button onClick={console.log("addddd")} className="checkout-btn">Checkout</button>
//       </footer>
//     </div>
//   );
// };

// export default CheckOut;


const CheckOut = ({ products }) => {
  const subtotalArray = products.map((item) => item.price * item.numberOfItems);

  let totalPrice = 0;
  for (let i = 0; i < subtotalArray.length; i++) {
    totalPrice += subtotalArray[i];
  }

  const handleCheckout = () => {
    alert("Checkout successful!");

    return
  };

  return (
    <div className="Checkout-cont">
      {products.length === 0 && <p>No item is added yet</p>}
      {products.map((items, index) => {
        return (
          <div className="Checkout" key={index}>
            <div className="img_desc-cont">
              <div className="h5">
                <img src={items.image} alt="" className="img" />
                <span>*{items.numberOfItems}</span>
              </div>
              <h4>Name: {items.reference}</h4>
              <h4>Price: ${items.price}</h4>
              <h6>Sub-total: ${items.price * items.numberOfItems}</h6>
            </div>
          </div>
        );
      })}

      <footer>
        Total: ${Math.floor(totalPrice * 100) / 100}
        <button onClick={handleCheckout} className="checkout-btn">
          Checkout
        </button>
      </footer>
    </div>
  );
};

export default CheckOut;
