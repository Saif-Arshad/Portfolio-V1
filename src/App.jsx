import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import PortfolioMain from "./Pages/Portfoliopage/PortfolioMain.jsx";
import Hero from './Pages/HomePage/Hero.jsx';
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<PortfolioMain />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>

      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50 }}>
        <div style={{ backgroundColor: '#3ccf91', color: 'black' }}>
          <div style={{ margin: '0 auto', maxWidth: '1120px', padding: '16px 24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flex: 1, alignItems: 'center', textAlign: 'center', color: 'black', marginBottom: '12px' }}>
                <div>
                  <a
                    href="https://saifurrehman.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'white',
                      color: 'black',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    Visit Website
                  </a>
                </div>
                <p style={{ margin: 0, fontWeight: 500, display: 'flex', alignItems: 'center', color: 'black' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    style={{ height: '20px', margin: '0 10px' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                  The new portfolio website of{' '}
                  <strong style={{ margin: '0 6px' }}>Saif Ur Rehman</strong> is live! Visit it now by clicking the button.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
