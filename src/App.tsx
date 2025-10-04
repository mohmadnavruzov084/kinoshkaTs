import Header from "./components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import Categories from "./components/pages/Categories/Categories";
import CategoryMovies from "./components/CategoryMovies/CategoryMovies";
import { About } from "./components/pages/About";
import SearchResults from "./components/pages/SearchResult/SearchResults";
import "./main.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:genre" element={<CategoryMovies />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
