import React from 'react';
import MiniPhotoItem from './miniPhotoItem.jsx'

const styleObj = {
  listStyle: 'none',
  display: 'inline-block',
  marginBlockStart: '0px',
  paddingInlineStart: '0px',
  paddingRight: '6px'
}

const MiniPhotoList = (props) => {
  // console.log('inside miniPhotoList');
  return <ul style={styleObj}>
    {
      props.miniPhotos.map(item => {
        return <MiniPhotoItem photo={item} changeMainPhoto={props.changeMainPhoto} />
      })
    }
  </ul>
}

export default MiniPhotoList;