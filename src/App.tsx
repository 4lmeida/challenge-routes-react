import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/Home/About"
import HomeBody from "./routes/Home/HomeBody"
import Products from "./routes/Home/Products"
import Books from "./routes/Home/Products/Books"
import Computers from "./routes/Home/Products/Computers"
import Eletronics from "./routes/Home/Products/Eletronics"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Navigate to="/home" />}  />
        <Route path="home" element={<HomeBody />} />
        <Route path="products" element={<Products />}>
          <Route path="computers" element={<Computers />} />
          <Route path="eletronics" element={<Eletronics />} />
          <Route path="books" element={<Books />} />
        </Route>
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
