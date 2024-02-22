import "./App.css";
import Form from "./Form";
import logo from "../public/placeholder_logo.svg";
function App() {
  return (
    <>
      <div>
        <img src={logo} alt="" className="mb-5" />
      </div>
      <Form />
    </>
  );
}

export default App;
