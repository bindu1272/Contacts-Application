import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
