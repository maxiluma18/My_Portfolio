
import { BrowserRouter as Routes } from "react-router-dom"
import './App.css'
import { Nav } from "./components/Nav.jsx"
import { AppRouter } from "./components/AppRouter.jsx"
import { Footer } from "./components/Footer.jsx"



function App() {
  return (
    <>
      <Routes>
        <Nav />
        <AppRouter />
        <Footer />
      </Routes>
    </>
  )
}

export default App
