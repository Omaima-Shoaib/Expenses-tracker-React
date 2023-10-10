import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import History from "./components/History";
import IncomeExpenses from "./components/IncomeExpenses";
import NewTransaction from "./components/NewTransaction";
// import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="container min-h-screen bg-gray-100 ">
      <div
        className=" px-3 py-4  flex-col  items-center justify-center 
      w-1/4"
      >
        <Header></Header>
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <History></History>
        <NewTransaction></NewTransaction>
      </div>
    </div>
  );
}

export default App;
