import React from "react";
import Portfolio from '../../assets/Images/Projects/Personal V1.jpg'
import InkMosaic from "../../assets/Images/Projects/Ink.jpg";
import CGP from "../../assets/Images/Projects/CGPCalculator.jpg";
import Dictionary from "../../assets/Images/Projects/Dictionary.jpg";
import LibertFilm from "../../assets/Images/Projects/LibertyFilms.jpg"
import CSplus from "../../assets/Images/Projects/csplus.jpg"
import mountain from "../../assets/Images/Projects/mountain.jpg"
import power from "../../assets/Images/Projects/Power Fitness.jpg"
import currency from "../../assets/Images/Projects/currency.jpg"""

const projectsData2 = [
  {
    id: 1,
    title: "Portfolio Website V1",
    description: "My dynamic portfolio website v1, crafted with React.js and SCSS. Explore my projects showcasing creativity and technical prowess. Each element, from design to responsiveness, reflects my dedication to excellence in web development and design.",
    imageUrl:`${Portfolio}`,
    Github:'https://github.com/Saif-Arshad/Portfolio-V1',
    livelink:'https://saifwebdev.netlify.app/',
    Built:'Vite,React,Scss',
  },

  {
    id: 2,
    title: "Wordplay Dictionary",
    description: "React-based dictionary app utilizing API to fetch and display information on the frontend interface efficiently.",
    imageUrl: `${Dictionary}`,
    Github:'https://github.com/Saif-Arshad/Wordplay',
    livelink:'https://saif-wordplay.netlify.app/',
    Built:'React Js',
  },
  {
    id: 3,
    title: "CGP Calculator",
    description: "Instantly calculate your CGP using university grades with our convenient CGP generator app.",
    imageUrl: `${CGP}`,
    Github:'https://github.com/Saif-Arshad/CGP-Calculator',
    livelink:'https://saif-cgpcalculator.netlify.app/',
    Built:'Vite,React',
  },

  {
    id: 4,
    title: "TheInkMosaic (Tattoo Agency)",
    description: "Explore our tattoo studio website, crafted with GSAP animation library, boasting exceptional animations that captivate. Dive into creativity.",
    imageUrl:`${InkMosaic}`,
    Github:'https://github.com/Saif-Arshad/TheInkMosaic-TattooWebsite',
    livelink:'https://saif-arshad.github.io/TheInkMosaic-TattooWebsite/',
    Built:'HTML,CSS,GSAP',
  },
  {
    id: 5,
    title: "Power Fitness",
    description: "Power fitness is a gym that allows people to choose different types of fitness for their body",
    imageUrl:`${power}`,
    Github:'https://github.com/Saif-Arshad/Power-Fitness',
    livelink:'https://power-boxing.netlify.app/',
    Built:'Vite,React js',
  },
  {
    id: 6,
    title: "CS Plus",
    description: "Cs plus is a company site who sale corporate software to companies",
    imageUrl:`${CSplus}`,
    Github:'https://github.com/Saif-Arshad/CS-Plus',
    livelink:'https://csplus.netlify.app/',
    Built:'Vite,React js',
  },
  {
    id: 7,
    title: "Mountain Hiking ",
    description: "Mountain Hiking is a company that provides tours around the world for people",
    imageUrl:`${mountain}`,
    Github:'https://github.com/Saif-Arshad/Mountain-Hiking',
    livelink:'https://mountain-climing.vercel.app/',
    Built:'Vite,React TypeScript',
  },
  {
    id: 8,
    title: "CurrencyXchange ",
    description: "currencyXchange is a website which provides currency exchange information",
    imageUrl:`${currency}`,
    Github:'https://github.com/Saif-Arshad/Currency-Exchange',
    livelink:'https://raterover.netlify.app/',
    Built:'Vite,React JavaScript',
  },
  {
    id: 10,
    title: "Liberty Films",
    description: "Liberty Film is a film studio based in berlin and this is his site using React js",
    imageUrl:`${LibertFilm}`,
    Github:'https://github.com/Saif-Arshad/Liberty-films',
    livelink:'https://libertyfilm.netlify.app/',
    Built:'Vite,React js',
  }
];

const PortfolioCard2 = ({ project }) => {
  const { title, description, imageUrl, Github, livelink, Built } = project;

  return (
    <div className="portfolio-card-main">
      <a href={livelink} target="_blank">
        <img src={imageUrl} alt={title} />
      </a>
      <div className="text-portfolio-main">
      <h4>Featured Project</h4>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="links">
        <a href={livelink} target="_blank">
          <svg
            className="firstsvg"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            aria-label="project link"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
          </svg>
        </a>
        <a href={Github} target="_blank">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 496 512"
            aria-label="github"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>
        </a>
      </div>
      <span >{Built}</span>
      </div>
    </div>
  );
};

const PortfolioCard = () => {
  return (
    <div className="portfolioMian-sepratePage">
      {projectsData2.map((project) => (
        <PortfolioCard2 key={project.id} project={project} />
      ))}
    </div>
  );
};

export default PortfolioCard;
