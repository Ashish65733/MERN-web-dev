import "./App.css";
import Title from "./Title";
// import {Title} from './Title' --> in case of named export
import { Description } from "./Description";

function App() {
  return (
    <div>
      <Title />
      <Description />
      <Description />
      <h1>This is my App Component!</h1>
    </div>
  );
}

export default App;
