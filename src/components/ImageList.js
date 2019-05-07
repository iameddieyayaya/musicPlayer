import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map(img => {
    return <ImageCard key={img.id} images={img} />;
  });
  return (
    <div style={{ paddingLeft: '25px' }} className='image-list'>
      {images}
    </div>
  );
};
export default ImageList;
