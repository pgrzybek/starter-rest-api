import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "./UserContext";
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Header() {
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
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link onClick={logout}>Logout ({username})</Link>
            {/* !!!!insert logged in header */}
          </>
        )}
        {!username && (
          <>

            {/* <Link to="/register">Register</Link> */}
            <div className="menuIcon">
              <FontAwesomeIcon  icon={icon({name: 'bars', style: 'solid'})} />
				    </div>
            <div className='menuLinks'>
                <HashLink id="homeHLink" smooth to="/#home"
                >Home</HashLink>
                <HashLink id="actorHLink" smooth to="/#actor">
                  Actor
                </HashLink>
                <HashLink id="coachHLink" smooth to="/#coach">
                  Coach
                </HashLink>
                <HashLink id="mediaTrainingHLink" smooth to="/#mediaTraining">
                  Media Training
                </HashLink>
                <HashLink id="scriptHLink" smooth to="/#script">
                  Script Consultancy
                </HashLink>
                <HashLink id="aboutHLink" smooth to="/#about">
                  About
                </HashLink>
                <HashLink id="blogGalleryHLink" smooth to="/#blogGallery">
                  Blog
                </HashLink>
                <HashLink id="galleryHLink" smooth to="/#gallery">
                  Gallery
                </HashLink>
                <HashLink id="testimonialHLink" smooth to="/#testimonial">
                  Testimonials
                </HashLink>
                <HashLink id="contactHLink" smooth to="/#contact">
                  Contact
                </HashLink>
                <Link id="loginLink" to="/login">
                  Login
                </Link>
              </div>



            
          </>
        )}
      </nav>
    </header>
  );
}
