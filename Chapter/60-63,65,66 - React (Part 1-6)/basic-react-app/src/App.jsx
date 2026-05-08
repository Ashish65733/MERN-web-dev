import "./App.css";
import Title from "./Title";
// import {Title} from './Title' --> in case of named export
import { Description } from "./Description";
import ProductTab from "./ProductTab";

function App() {
  return (
    // <div className="mainBox">
    //   <Title />
    //   <Description />
    //   <Description />
    //   <h1>This is my App Component!</h1>
    // </div>

    <>
      <ProductTab />
    </>
  );
}

export default App;
