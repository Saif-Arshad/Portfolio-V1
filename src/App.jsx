import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.scss'
import PortfolioMain from "./Pages/Portfoliopage/PortfolioMain.jsx"
import Hero from './Pages/HomePage/Hero.jsx'
// import ContactPage from "./Pages/ContactPage/ContactPage.jsx"
import AboutPage from "./Pages/AboutPage/AboutPage.jsx"
function App() {

  return (
    <>
     <Router>
         <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Hero/>}
                        ></Route>
                        <Route
                            exact
                            path="/about"
                            element={<AboutPage/>}
                        ></Route>
                        <Route
                            exact
                            path="/project"
                            element={<PortfolioMain/>}
                        ></Route>
                    </Routes>
                    </Router>
    {/* <Hero/> */}
    {/* <AboutPage/> */}
    {/* <PortfolioMain/> */}
    {/* <ContactPage/> */}
    </>
  )
}

export default App
