import { RouterProvider } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footers from "./Component/Footers/Footers";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Projects from "./Component/Projects/Projects";
import router from "./router/router";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
