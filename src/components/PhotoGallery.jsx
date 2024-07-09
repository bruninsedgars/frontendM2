import React from 'react';
import Gallery from 'react-photo-gallery';

const photos = [
  {
    src: '/images/lake.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/images/church.jpg',
    width: 1,
    height: 1,
  },
  {
    src: '/images/school.jpg',
    width: 4,
    height: 3,
  },
  // Add more photos if needed
];

const PhotoGallery = () => {
  return (
    <div>
      <h2>Photo Gallery</h2>
      <Gallery photos={photos} />
    </div>
  );
};

export default PhotoGallery;
