import './App.css'
import AddTransication from './components/AddTransication'
import Blance from './components/Blance'
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import TransizationList from './components/TransizationList'
import { ConProvider } from '../context/globalState'


function App() {

  return (
    <div className="App">
      <Header/>
      <ConProvider>
        <div className="container">
          <Blance/>
          <IncomeExpense/>
          <TransizationList/>
          <AddTransication/>
        </div>
      </ConProvider>
    </div>
  )
}

export default App
