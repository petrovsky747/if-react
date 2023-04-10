import React from 'react';
import Flickity from 'react-flickity-component';
import './flickity.css';
import './Carousel.css';

const flickityOptions = {
  cellAlign: 'center',
  contain: true,
  draggable: false,
  groupCells: true,
  pageDots: false,
  percentPosition: false,
  arrowShape: {
    x0: 35,
    x1: 60,
    y1: 35,
    x2: 70,
    y2: 35,
    x3: 45 }
}

export function Carousel({children}) {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {children}
    </Flickity>
  )
}

