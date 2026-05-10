import "./Product.css";

function Product({ title, price = 12000, features }) {
//   const list = features.map((feature) => <li>{feature}</li>);
    let isDiscount = price > 30000;
    let style = {backgroundColor : isDiscount ? "lightblue" : ""}
  return (
    <div className="Product" style={style}>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      {/* {price > 30000 ? <p>"Discount of 5%"</p> : null} */}
      {isDiscount && <p>"Discount of 5%"</p>}
      <p>{
        features ? (
          <ul>
            {features.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        ) : null
      }</p>
    </div>
  );
}

export default Product;
