import React from 'react';
import MiniPhotoItem from './miniPhotoItem.jsx'

const styleObj = {
  listStyle: 'none'
}

const MiniPhotoList = (props) => {
  console.log('inside miniPhotoList')
  return <ul style={styleObj}>
    {
      props.miniPhotos.map(item => {
        return <MiniPhotoItem item={item} />
      })
    }
  </ul>
}

export default MiniPhotoList;