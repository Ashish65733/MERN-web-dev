import Product from "./Product.jsx";
import MsgBox from "./MsgBox";

function ProductTab() {
//   let options = [<li>"Good Camera"</li>, <li>"Long Battery Life"</li>, <li>"Fast Processor"</li>];
  let options = ["Good Camera", "Long Battery Life", "Fast Processor"];
  return (
    <>
      <MsgBox userName="Ashish" textColor="blue"/>
      <MsgBox userName="Sadie" textColor="pink"/>
      
      {/* <Product title="phone" price="30000" features={["Good Camera", "Long Battery Life", "Fast Processor"]} /> */}
      <Product title="phone" price="30000" features={options} />
      <Product title="laptop" price="50000" />
      <Product title="tablet" price="20000" />

    </>
  );
}

export default ProductTab;
