
import { BrowserRouter as Routes } from "react-router-dom"
import './App.css'
import { Nav } from "./components/Nav.jsx"
import { AppRouter } from "./components/AppRouter.jsx"
import { Footer } from "./components/Footer.jsx"
import { ThemeContext } from "./providers/Theme"



function App() {
  return (
    <>
      <ThemeContext>
        <Routes>
          <Nav />
          <AppRouter />
          <Footer />
        </Routes>
      </ThemeContext>
    </>
  )
}

export default App
