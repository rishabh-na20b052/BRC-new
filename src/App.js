import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Nav from './components/appbar/nav';
import Footer from './components/footer/footer';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blogs />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  
  );
}

export default App;