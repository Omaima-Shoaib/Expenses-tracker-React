import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import History from "./components/History";
import IncomeExpenses from "./components/IncomeExpenses";
import NewTransaction from "./components/NewTransaction";
import TransactionList from "./components/TransactionList";
// import Welcome from "./components/Welcome";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
    <div className="container min-h-screen bg-gray-100 ">
      <div
        className=" px-3 py-4  flex-col  items-center justify-center 
      md:w-1/4 w-1/2"
      >
        <Header></Header>
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        {/* <History></History> */}
        <TransactionList></TransactionList>
        <NewTransaction></NewTransaction>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
