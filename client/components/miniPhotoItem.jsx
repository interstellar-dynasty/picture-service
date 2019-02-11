import React from 'react';

const styleObj = {
  flex: 1,
  height: '50px',
  width: '50px',
  border: 'solid black 1px',
  backgroundColor: 'transparent',
  resizeMode: 'contain',
}

const MiniPhotoItem = (props) => {
  // console.log('inside miniPhotoItem ', props.photo);
  return <li>
    <img id={props.photo.id} onMouseOver={props.changeMainPhoto} style={styleObj} src={props.photo.url} />
  </li>
}

export default MiniPhotoItem;