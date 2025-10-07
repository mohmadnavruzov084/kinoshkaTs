import Header from "./components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import Categories from "./components/pages/Categories/Categories";
import CategoryMovies from "./components/CategoryMovies/CategoryMovies";
import { About } from "./components/pages/About";
import SearchResults from "./components/pages/SearchResult/SearchResults";
import "./main.scss";

const ROUTES_CONFIG = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/categories",
    element: <Categories/>
  },
  {
    path: "/category/:genre",
    element: <CategoryMovies />
  },
  {
    path: "/search/:query",
    element: <SearchResults />
  },
]


function App() {
  return (

    <div className= "wrapper" >
    <Header />

    <Routes>
  {
    ROUTES_CONFIG.map((route) => (
      <Route key= { route.path } path = { route.path } element = { route.element } />
))
  }

  </Routes>
    </div>
    
  );
}

export default App;
