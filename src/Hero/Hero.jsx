import './Hero.css';

const Hero = ({ products, handleAdd}) => {
  return (
    <div className='Hero-cont'>
      {products.map((items, index) => (
        <div key={index} className="CartItem">
          <img src={items.image} alt="" className="cartimg" />
          <h4>Name: {items.reference}</h4>
          <h4>Price: {items.price}</h4>
          <span>Sales: {items.sales}</span>
          <button style={items.isAdded ? {backgroundColor: 'tomato'} : {}} onClick={() => handleAdd(items)}>{items.isAdded ? "Remove from cart": "Add to cart"}</button>
        </div>
      ))}
    </div>
  );
};

export default Hero;
