import { render } from "react-dom";
import App from "./components/App";

render(<App />, document.getElementById("root"));

// this is required 100% for reloading
if (module.hot) {
  module.hot.accept();
}