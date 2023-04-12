import './assets/css/App.css';
// import Post from "./Post";
// import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import {UserContextProvider} from "./UserContext";
import PrivateRoute from "./PrivateRoute"

//Pages
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import PostsPage from './pages/PostsPage';
import EditPost from "./pages/EditPost";

//Home page sections
import Home from "./Home"
import Actor from './Actor';
import Contact from './Contact';
import Coach from './Coach';
import MediaTraining from './MediaTraining'
import Script from './Script'
import About from './About'
import BlogGallery from './BlogGallery';
import Gallery from './Gallery';
import Testimonial from './Testimonial'
import contentAnimate from './assets/animation/contentAnimate';

function App() {

  console.log(`app.js contentAnimateStr ${JSON.stringify(contentAnimate)}`) //returns string obj as expected
  console.log(`app.js contentAnimateObj ${{contentAnimate}}`) //returns [object Object]
  return (
    // user context makes user available to the child components
    <UserContextProvider> 
      <Routes>
        <>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
              <Route path="/#home" element={<Home />} />
              <Route path="/#actor" element={<Actor bool={true} contentAnimate={contentAnimate} />} />
              {/* <Route path="/#actor" render={(props)=> (<Actor bool={true} contentAnimate={contentAnimate} {...props} />)} /> */}
              <Route path="/#coach" element={<Coach />} />
              <Route path="/#mediaTraining" element={<MediaTraining />} />
              <Route path="/#script" element={<Script />} />
              <Route path="/#about" element={<About />} />
              <Route path="/#blogGallery" element={<BlogGallery />} />
              <Route path="/#gallery" element={<Gallery />} />
              <Route path="/#testimonial" element={<Testimonial />} />
              <Route path="/#contact" element={<Contact />} />

            <Route path="/posts" element={<PostsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/post/:id" element={<PostPage />} />

            {/* private routes */}
            <Route exact path='/create' element={<PrivateRoute/>}>
              <Route exact path='/create' element={<CreatePost/>}/>
            </Route>
            <Route exact path='/edit/:id' element={<PrivateRoute/>}>
              <Route exact path='/edit/:id' element={<EditPost/>}/>
            </Route>

          </Route>
        </>

      </Routes>
    </UserContextProvider>
  );
}

export default App;
