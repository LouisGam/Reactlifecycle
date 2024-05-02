import { HomePage } from "./pages";
import { FilmsPage } from "./pages";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {   

  return (

    <BrowserRouter>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/films">Films</NavLink></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/films" element={<FilmsPage />} />
    </Routes>
    </BrowserRouter>


  )
}
export default App;
