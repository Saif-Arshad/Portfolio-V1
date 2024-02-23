import Header from "./Components/Header/Header.jsx"
import './App.scss'
import Footer from './Components/Footer/Footer.jsx'
import PortfolioMain from "./Pages/Portfoliopage/PortfolioMain.jsx"
import Hero from './Pages/HomePage/Hero.jsx'
import ContactPage from "./Pages/ContactPage/ContactPage.jsx"
function App() {

  return (
    <>
    <Header/>
    {/* <Hero/> */}
    {/* <PortfolioMain/> */}
    <ContactPage/>
    <Footer/>
    </>
  )
}

export default App
