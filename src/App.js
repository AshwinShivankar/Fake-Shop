import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
function App() {
  return (
    <div className="App">
      <Page1 />
      <Page2 />
      <Page3 className="" />
    </div>
  );
}

export default App;
