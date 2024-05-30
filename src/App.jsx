import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss'
import PortfolioMain from "./Pages/Portfoliopage/PortfolioMain.jsx"
import Hero from './Pages/HomePage/Hero.jsx'
import ContactPage from "./Pages/ContactPage/ContactPage.jsx"
import AboutPage from "./Pages/AboutPage/AboutPage.jsx"
function App() {

  return (
    <>
     <Router>
         <Routes>
                        <Route
                            path="/"
                            element={<Hero/>}
                        />
                        <Route
                            path="/about"
                            element={<AboutPage/>}
                        />
                        <Route
                            path="/project"
                            element={<PortfolioMain/>}
                        />
                        <Route
                            path="/contact"
                            element={<ContactPage/>}
                        />
                    </Routes>
                    </Router>
    {/* <Hero/> */}
    {/* <AboutPage/> */}
    {/* <PortfolioMain/> */}
    </>
  )
}

export default App
