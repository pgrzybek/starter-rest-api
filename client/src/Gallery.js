import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import GalleryBox from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// https://neptunian.github.io/react-photo-gallery/examples/lightbox.html

export default function Gallery(){

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    const photos = [   
        {src:require('./assets/images/fulls/01.jpg'), width: 3,height: 3},
        {src:require('./assets/images/fulls/02.jpg'), width: 3,height: 3},
        {src:require('./assets/images/fulls/03.jpg'), width: 3,height: 3},
        {src:require('./assets/images/fulls/04.jpg'), width: 3,height: 3},
        {src:require('./assets/images/fulls/05.jpg'), width: 3,height: 3},
        {src:require('./assets/images/fulls/06.jpg'), width: 3,height: 3}
    ]


    return(
        <section id="gallery" className="main style3 primary">
        <div className="content">
            <header>
                <h2 id="galleryHeading">My Craft</h2>
                <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
                Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis
                arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.</p>

            </header>
            
            <div>
              <GalleryBox photos={photos} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>

        </div>
    </section>
    )
}

// Modal.setAppElement('#root');


















// import React, { useState } from 'react';
// import Modal from 'react-modal';

// export default function Gallery(){
//     const [selectedImageIndex, setSelectedImageIndex] = useState(null);

//     // componentWillMount(){
//     //     Modal.setAppElement('body');
//     // }

//     const images = [   
//     {fullsSrc:require('./assets/images/fulls/01.jpg') ,thumbsSrc: require('./assets/images/thumbs/01.jpg'), alt: 'img', title: 'image title'},
//     {fullsSrc:require('./assets/images/fulls/02.jpg') ,thumbsSrc: require('./assets/images/thumbs/02.jpg'), alt: 'img', title: 'image title'},
//     {fullsSrc:require('./assets/images/fulls/03.jpg') ,thumbsSrc: require('./assets/images/thumbs/03.jpg'), alt: 'img', title: 'image title'},
//     {fullsSrc:require('./assets/images/fulls/04.jpg') ,thumbsSrc: require('./assets/images/thumbs/04.jpg'), alt: 'img', title: 'image title'},
//     {fullsSrc:require('./assets/images/fulls/05.jpg') ,thumbsSrc: require('./assets/images/thumbs/05.jpg'), alt: 'img', title: 'image title'},
//     {fullsSrc:require('./assets/images/fulls/06.jpg') ,thumbsSrc: require('./assets/images/thumbs/06.jpg'), alt: 'img', title: 'image title'}
//     ]

//     const Image = ({src, alt, title, index, onClick})=> {
//         return (
//             <article className="from-left" key={index} >
//                 <img src={src} className="image fit" title={title} alt={alt} onClick={onClick}/>
//             </article>

//             // <article className="from-left" key={index} onClick={() => setSelectedImageIndex(index)}>
//             //     <a href={fullsSrc}  className="image fit">
//             //         <img src={thumbsSrc}  title={title} alt={alt} />
//             //     </a>
//             // </article>
//         )
//     }

//     return(
//         <section id="gallery" className="main style3 primary">
//         <div className="content">
//             <header>
//                 <h2 id="galleryHeading">My Craft</h2>
//                 <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
//                 Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis
//                 arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.</p>

//             </header>

//                 <div className="gallery">
//                     {images.map((x, index) => (
//                         <Image src={x.thumbsSrc} 
//                         title={x.title} 
//                         alt={x.alt} 
//                         key={index} 
//                         onClick={() => setSelectedImageIndex(index)}/>
//                         ))}
//                 </div>

                

//                 <Modal 
//                 isOpen={selectedImageIndex !== null} 
//                 onRequestClose={() => setSelectedImageIndex(null)}
//                 contentLabel="Image modal"
//                 onAfterClose={() => document.body.style.overflow = 'visible'}
//                 onAfterOpen={() => document.body.style.overflow = 'hidden'}
//                 // className='modal-parent'
//                 >
//                     <div className="gallery-modal-content">
//                         <button onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}>Prev</button>
//                         <img src={images[selectedImageIndex]?.fullsSrc} alt={images[selectedImageIndex]?.alt} />
//                         <button onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}>Next</button>
//                         <button className='close' onClick={() => setSelectedImageIndex(null)}>Close</button>
//                     </div>
//                 </Modal>



//         </div>
//     </section>
//     )
// }

// Modal.setAppElement('#root');












                    {/* <article className="from-left" key={1} onClick={() => setSelectedImageIndex(1)}>
                        <a href={require("./assets/images/fulls/01.jpg")}  className="image fit"><img src={require("./assets/images/thumbs/01.jpg")}  title="I am an ACTOR" alt="" /></a>
                    </article>
                    <article className="from-right" key={2} onClick={() => setSelectedImageIndex(2)}>
                        <a href={require("./assets/images/fulls/02.jpg")} className="image fit"><img src={require("./assets/images/thumbs/02.jpg")}  title="Look at me acting" alt="" /></a>
                    </article>
                    <article className="from-left" key={3} onClick={() => setSelectedImageIndex(3)}>
                        <a href={require("./assets/images/fulls/03.jpg")} className="image fit"><img src={require("./assets/images/thumbs/03.jpg")}  title="Actionnnn" alt="" /></a>
                    </article>
                    <article className="from-right" key={4} onClick={() => setSelectedImageIndex(4)}>
                        <a href={require("./assets/images/fulls/04.jpg")} className="image fit"><img src={require("./assets/images/thumbs/04.jpg")}  title="Coaching" alt="" /></a>
                    </article>
                    <article className="from-left" key={5} onClick={() => setSelectedImageIndex(5)}>
                        <a href={require("./assets/images/fulls/05.jpg")} className="image fit"><img src={require("./assets/images/thumbs/05.jpg")}  title="Corporate tings init" alt="" /></a>
                    </article>
                    <article className="from-right" key={6} onClick={() => setSelectedImageIndex(6)}>
                        <a href={require("./assets/images/fulls/06.jpg")} className="image fit"><img src={require("./assets/images/thumbs/06.jpg")} title="Watch and learn" alt="" /></a>
                    </article> */}