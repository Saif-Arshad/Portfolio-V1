import Header from "./Components/Header/Header.jsx"
import './App.scss'
import Footer from './Components/Footer/Footer.jsx'
import PortfolioMain from "./Pages/Portfoliopage/PortfolioMain.jsx"
import Hero from './Pages/HomePage/Hero.jsx'
import ContactPage from "./Pages/ContactPage/ContactPage.jsx"
import AboutPage from "./Pages/AboutPage/AboutPage.jsx"
function App() {

  return (
    <>
    <Header/>
    {/* <Hero/> */}
    <AboutPage/>
    {/* <PortfolioMain/> */}
    {/* <ContactPage/> */}
    <Footer/>
    </>
  )
}

export default App
