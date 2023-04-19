import React, { useState } from "react";
import picData from "./assets/images/data/images";
import Modal from "./Modal";
// https://www.youtube.com/watch?v=KNEbqO-q1r8&ab_channel=ForThoseWhoCode

export default function Gallery(){
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = picData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = picData[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = picData.filter((item) => {
      return picData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = picData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = picData[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = picData.filter((item) => {
      return picData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  
    // const photos = [   
    //     {src:require('./assets/images/fulls/01.jpg')},
    //     {src:require('./assets/images/fulls/02.jpg')},
    //     {src:require('./assets/images/fulls/03.jpg')},
    //     {src:require('./assets/images/fulls/04.jpg')},
    //     {src:require('./assets/images/fulls/05.jpg')},
    //     // {src:require('./assets/images/fulls/05.jpg'), width: 3,height: 3},
    //     {src:require('./assets/images/fulls/06.jpg')}
    // ]


    return(
      <>
        <section id="gallery" className="main style3 primary">
        <div className="content">
            <header>
                <h2 id="galleryHeading">My Craft</h2>
                <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
                Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis
                arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.</p>

            </header>
            <div className="galleryWrapper">
              {picData.map((item, index) => (
                <div key={index} className="wrapperImages">
                  <img
                    src={item.link}
                    alt={item.text}
                    onClick={() => handleClick(item, index)}
                  />
                </div>
              ))}
              <div>
                {clickedImg && (
                  <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight}
                    setClickedImg={setClickedImg}
                    handelRotationLeft={handelRotationLeft}
                  />
                )}
              </div>
            </div>


        </div>
     </section>
    </>
    )
}