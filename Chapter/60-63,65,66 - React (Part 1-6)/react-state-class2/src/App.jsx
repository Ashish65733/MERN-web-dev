import './TodoList'
import LudoBoard from "./LudoBoard"
import TodoList from './TodoList'
import Lottery from './Lottery'

function App() {
  let winningCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  }
  
  return (
    <>
      {/* <LudoBoard /> */}
      {/* <TodoList /> */}
      <Lottery n={3} winningCondition={winningCondition}/>
    </>
  )
}

export default App
