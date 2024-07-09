import logo from "./logo.svg";
import "./App.css";
import weatherData from "./weather";
import Data from "./weatherdata";

const App = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log({ baseUrl });
  return (
    <div>
      <Data />
      <weatherData />
    </div>
  );
};
export default App;
