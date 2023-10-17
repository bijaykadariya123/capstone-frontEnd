import { useLoaderData } from "react-router-dom";
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// import React from "react";


// function Carousel({ item }) { // Accept 'item' as a prop
//     return (
//       <div>
//         <h1>{item.name}</h1> {/* Display item name */}
//         <img src={item.image} alt={item.name} /> {/* Display item image */}
//       </div>
//     );
//   }
  
//   export default Carousel;

//  Carousel effect

function Carousels({ images }) {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      dynamicHeight={false}
      useKeyboardArrows={true}
      autoPlay={true} // Add autoPlay prop to enable autoplay
      interval={1500} // Set the autoplay interval (in milliseconds)
    >
      {images.map((image, index) => (
        <div key={index}>
          <img className="carouselImage" src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default Carousels;