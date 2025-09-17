import About from "./pages/about us/AboutUs";
import Article from "./pages/article/Article";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import MakeArticle from "./pages/makearticle/MakeArticle";


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/make-article" element={<MakeArticle />} />
      </Routes>
      
    </div>
  );
}

export default App;
