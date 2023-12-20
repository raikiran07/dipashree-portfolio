import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './assets/dipa-profile.png'
import Twitter from './assets/twitter.png'
import Github from './assets/github.png'
import Star from './assets/star.png'
import MobileSidebar from './Components/MobileSidebar'
import Resume from './Components/Resume'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

 
  return (
    <>
    <main className={`${isSidebarOpen ? "blur" : null}`}>

      <div className="header container" id="about">
        
    
        <h1 className="white">Hello, I'm <br></br>
        <span className="highlight">
        Dipashree 
        </span> Singha.
          
        </h1>
        <p className="about-me text">
        I am M. Dipashri Singha, a backend developer from Guwahati, Assam. I hold a B.Tech degree in computer science from Assam Downtown University.
        </p>

        <div className="social-links">
          <div className="profile social-image">
            <img src={Profile} alt="profile image" />
          </div>
          <div className="twitter  social-image">
          
          <div>
            <img src={Twitter} alt="twitter image" />
          </div>
          <p className="text">
            <a href="#" target="_blank">Twitter</a>
          </p>
          </div>
          <div className="github  social-image">
            <div>
              <img src={Github} alt="github icon" />
            </div>
            <p className="text">
              <a href="#" target="_blank">
              Github
              </a>
           </p>
              </div>
        </div>
      </div>

      <div className="container project-container" id="projects">
        <div className={`line-spacing nav`}>
        <h3 className="section-title">PROJECTS</h3>

        </div>
        
        <div className="project-container">
          <div className="project-item">
            <p className="project-language line-spacing">
              JAVASCRIPT
            </p>
            <h3 className="project-title">
              Automatic Home Automation
            </h3>

            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam recusandae dolores ea perferendis laudantium dolore adipisci, eveniet exercitationem fugit suscipit aperiam perspiciatis ipsam doloribus excepturi est quisquam, nostrum in ipsa.
            </p>

            <div className="rate-container text">
              <img src={Star} alt="star image" style={{width:"15px"}} />
              <p>5</p>
            </div>

          </div>

          <div className="project-item">
            <p className="project-language line-spacing">
              REACTJS
            </p>
            <h3 className="project-title">
              Kiranra.tech
            </h3>

            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam recusandae dolores ea perferendis laudantium dolore adipisci.
            </p>

            <div className="rate-container text">
              <img src={Star} alt="star image" style={{width:"15px"}} />
              <p>10</p>
            </div>

          </div>

          <div className="project-item">
            <p className="project-language line-spacing">
              HTML & CSS
            </p>
            <h3 className="project-title">
              Ludo.play
            </h3>

            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam recusandae dolores ea perferendis laudantium dolore adipisci, eveniet exercitationem fugit suscipit aperiam.
            </p>

            <div className="rate-container text">
              <img src={Star} alt="star image" style={{width:"15px"}} />
              <p>20</p>
            </div>

          </div>
          <div className="project-item">
            <p className="project-language line-spacing">
              HTML & CSS
            </p>
            <h3 className="project-title">
              Ludo.play
            </h3>

            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam recusandae dolores ea perferendis laudantium dolore adipisci, eveniet exercitationem fugit suscipit aperiam.
            </p>

            <div className="rate-container text">
              <img src={Star} alt="star image" style={{width:"15px"}} />
              <p>20</p>
            </div>

          </div>
          <div className="project-item">
            <p className="project-language line-spacing">
              HTML & CSS
            </p>
            <h3 className="project-title">
              Ludo.play
            </h3>

            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam recusandae dolores ea perferendis laudantium dolore adipisci, eveniet exercitationem fugit suscipit aperiam.
            </p>

            <div className="rate-container text">
              <img src={Star} alt="star image" style={{width:"15px"}} />
              <p>20</p>
            </div>

          </div>
          <div className="project-item">
            <p className="project-language line-spacing">
              HTML & CSS
            </p>
            <h3 className="project-title">
              Ludo.play
            </h3>

            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam recusandae dolores ea perferendis laudantium dolore adipisci, eveniet exercitationem fugit suscipit aperiam.
            </p>

            <div className="rate-container text">
              <img src={Star} alt="star image" style={{width:"15px"}} />
              <p>20</p>
            </div>

          </div>
          <div className="project-item">
            <p className="project-language line-spacing">
              HTML & CSS
            </p>
            <h3 className="project-title">
              Ludo.play
            </h3>

            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam recusandae dolores ea perferendis laudantium dolore adipisci, eveniet exercitationem fugit suscipit aperiam.
            </p>

            <div className="rate-container text">
              <img src={Star} alt="star image" style={{width:"15px"}} />
              <p>20</p>
            </div>

          </div>
        </div>

        <div className="container resume-container" id="resume">
          <div className={`line-spacing nav`}>
          <h3 className="section-title" >RESUME</h3>
          </div>
          
        <div className="project-container">
          <Resume />
        </div>
        
        </div>
        <div className="container contact-container" id="resume">
          <div className={`line-spacing nav`}>
          <h3 className="section-title" >CONTACT</h3>
          </div>
          
        <div className="project-container">
          <Contact />
        </div>
        
        </div>
        
      </div>

      </main>
      <footer>
        <p className="text">
        <span className="highlight">&copy;</span> Dipashree Singha <span className="highlight">2023</span>
        </p>
      
      </footer>
       {/* Mobile sidebar toggle button */}
       <button className="toggle-btn" onClick={toggleSidebar}>

       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="25" viewBox="0 0 50 50">
<path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
</svg>
       
       
       </button>

{/* Mobile sidebar component */}
<MobileSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    
    </>
  )
}


export default App
