import React, { useState } from 'react';
import image1 from './1.jpeg';
import image2 from './2.jpeg';
import image3 from './3.jpeg';
import image4 from './4.jpeg';
import image5 from './5.jpeg';
import image6 from './6.webp';
import image7 from './7.jpg';
import image8 from './8.jpg';

const images = [image2, image3, image1, image4, image5, image6, image7, image8];

export default function Carousel() {
  const [image, setImage] = useState(0);
  const nextImage = () => {
    setImage(image === images.length - 1 ? 0 : image + 1);
  };
  const prevImage = () => {
    setImage(image === 0 ? images.length - 1 : image - 1);
  };
  return (
    <div>
      <h1 style={{ marginTop: 20 }}>Image Carousel</h1>
      <div
        style={{
          display: 'flex',
          direction: 'column',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'space-around',
        }}
      >
        <button style={{ height: '40px', width: '50px' }} onClick={prevImage}>
          {'<'}
        </button>
        <div
          style={{
            direction: 'row',
            alignItems: 'center',
          }}
        >
          <div>
            {images.map(
              (img, index) =>
                index === image && (
                  <img
                    key={img}
                    src={img}
                    alt={img}
                    style={{
                      width: '600px',
                      height: '600px',
                      objectFit: 'cover',
                    }}
                  />
                )
            )}
          </div>
          <div style={{ marginTop: 20 }}>{`${image + 1} of ${
            images.length
          }`}</div>
        </div>
        <button style={{ height: '40px', width: '50px' }} onClick={nextImage}>
          {'>'}
        </button>
      </div>
    </div>
  );
}
