import './TodoList'
import LudoBoard from "./LudoBoard"
import TodoList from './TodoList'
import Lottery from './Lottery'
import Form from './Form'
import CommentsForm from './CommentsForm'
import Comment from './Comment'
import Counter from './Counter'
import Joker from './Joker'

function App() {
  // let winningCondition = (ticket) => {
  //   return ticket.every((num) => num === ticket[0]);
  // }
  
  return (
    <>
      {/* <LudoBoard /> */}
      {/* <TodoList /> */}
      {/* <Lottery n={3} winningCondition={winningCondition}/> */}
      {/* <Form /> */}
      {/* <CommentsForm />   */}
      {/* <Comment/> */}
      {/* <Counter/> */}
      <Joker/>
    </>
  )
}

export default App
