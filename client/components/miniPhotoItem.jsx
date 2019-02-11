import React from 'react';

const styleObj = {
  flex: 1,
  height: '50px',
  width: '50px',
  resizeMode: 'contain'
}

const MiniPhotoItem = (props) => {
  console.log('inside miniPhotoItem ', props.item)
  return <li>
    <img style={styleObj} src={props.item} />
  </li>
}

export default MiniPhotoItem;