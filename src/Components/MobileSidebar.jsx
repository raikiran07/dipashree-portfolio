import React from 'react'

const MobileSidebar = ({ isOpen, onClose }) => {
    return (
      <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="close-btn-container">
        <button className="close-button" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
<path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
</svg>
        </button>
        </div>
        
        {/* Add your navigation links or content here */}
        <ul className="nav-link">
          <li onClick={onClose}>
            <a href="#about">ABOUT</a>
          </li>
          <li onClick={onClose}>
            <a href="#projects">
            PROJECTS
            </a></li>
          <li onClick={onClose}>
            <a href="#resume">
                RESUME
            </a>
          </li>
          <li onClick={onClose}>
            <a href="#contact">
                CONTACTS
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default MobileSidebar;