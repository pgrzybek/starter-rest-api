import {Link, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Header() {
  const [click, setclick] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();

// set window size to display different menu icon behaviour
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1019) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    // add event listener for window resize
    window.addEventListener("resize", handleResize);

    // call handleResize initially
    handleResize();

    // remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleClick() {
    setclick(!click);
  }

  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header id="header">
      {/* <Link to="/" className="logo">MyBlog</Link> */}
      <nav className="navigation">

        <div className={click ? 'menuIcon' : 'menuIcon active'} 
          onClick={handleClick}>
          <FontAwesomeIcon
            icon={
              !click && isSmallScreen
                ? icon({ prefix: 'fas', name: 'times' })
                : icon({ prefix: 'fas', name: 'bars' })
            }
          />
        </div>

        {username && (
          <>
          <ul className={click ? 'navMenu' : 'navMenu active'}>
              <li className="navList">
                <HashLink id="homeHLink" className="navLink" onClick={handleClick} smooth to="/#home"
                  >Home</HashLink>
              </li>
              <li className="navList">
              <Link id="blogLink" to="/posts" className="navLink" onClick={handleClick}>
                    Blog
              </Link>
              </li>
              <li className="navList">
                <HashLink id="blogGalleryHLink" className="navLink" onClick={handleClick} smooth to="/#blogGallery"
                  >Featured posts</HashLink>
              </li>
              <li className="navList">
              <Link id="createPostLink" to="/create" className="navLink" onClick={handleClick}>
                    Create
              </Link>
              </li>
              <li className="navList">
                <Link id="logoutLink" onClick={logout} className="navLink">
                      Logout
                </Link>
              </li>
            {/* <Link to="/register">Register</Link> */}
          </ul>
          </>
        )}
        {!username && (
          <>
            <ul className={click ? 'navMenu' : 'navMenu active'}>
              <li className="navList">
                <HashLink id="homeHLink" className="navLink" onClick={handleClick} smooth to="/#home"
                  >Home</HashLink>
              </li>
              <li className="navList">
                <HashLink id="actorHLink" smooth to="/#actor" className="navLink" onClick={handleClick}>
                    Actor
                </HashLink>
              </li>
              <li className="navList">
                <HashLink id="coachHLink" smooth to="/#coach" className="navLink" onClick={handleClick}>
                    Coach
                </HashLink>
              </li>
              <li className="navList">
              <HashLink id="mediaTrainingHLink" smooth to="/#mediaTraining" className="navLink" onClick={handleClick}>
                    Media Training
              </HashLink>
              </li>
              <li className="navList">
              <HashLink id="scriptHLink" smooth to="/#script" className="navLink" onClick={handleClick}>
                    Script Consultancy
              </HashLink>
              </li>
              <li className="navList">
              <HashLink id="aboutHLink" smooth to="/#about" className="navLink" onClick={handleClick}>
                    About
              </HashLink>
              </li>
              <li className="navList">
              <Link id="blogLink" to="/posts" className="navLink" onClick={handleClick}>
                    Blog
              </Link>
              </li>
              <li className="navList">
              <HashLink id="galleryHLink" smooth to="/#gallery" className="navLink" onClick={handleClick}>
                    Gallery
              </HashLink>
              </li>
              <li className="navList">
              <HashLink id="testimonialHLink" smooth to="/#testimonial" className="navLink" onClick={handleClick}>
                    Testimonials
              </HashLink>
              </li>
              <li className="navList">
              <HashLink id="contactHLink" smooth to="/#contact" className="navLink" onClick={handleClick}>
                    Contact
              </HashLink>
              </li>
              <li className="navList">
              <Link id="loginLink" to="/login" className="navLink" onClick={handleClick}>
                    Login
              </Link>
              </li>
            </ul> 
          </>
        )}
      </nav>
    </header>
  );
}
