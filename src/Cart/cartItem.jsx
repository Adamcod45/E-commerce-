import { Trash2 } from "lucide-react";

const cartItem = ({
  products,
  setCartArray,
  removeItemFromCart,
  addItemFromCart,
  subItemFromCart,
  setCount,
  count,
}) => {
  return (
    <div className="container">
      {products.length === 0 && <p>No item is added yet</p>}
      {products.map((items, index) => {
        return (
          <div key={index} className="CartItem top">
            <div className="img_desc">
              <img src={items.image} alt="" />
              <div className="desc-cont">
                <h4>Name:{items.reference}</h4>
                <h4>Price:${items.price}</h4>
              </div>
            </div>
            <div className="count_del">
              <h4 onClick={() => addItemFromCart(items)} > +</h4>
              <span>{items.numberOfItems}</span>
              <h4 onClick={() => subItemFromCart(items)}>-</h4>
              <div onClick={() => removeItemFromCart(items)} className="Trash">
                <Trash2 />
                Remove
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default cartItem;
