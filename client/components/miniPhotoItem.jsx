import React from 'react';

const styleObj = {
  flex: 1,
  height: '50px',
  width: '50px',
  resizeMode: 'contain'
}

const MiniPhotoItem = (props) => {
  // console.log('inside miniPhotoItem ', props.photo);
  return <li>
    <img id={props.photo.id} onClick={props.changeMainPhoto} style={styleObj} src={props.photo.url} />
  </li>
}

export default MiniPhotoItem;