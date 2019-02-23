import React from 'react';

const MiniPhotoItem = (props) => {
  // console.log('inside miniPhotoItem ', props.photo);
  return (
    <li>
      <img
        id={props.photo.id}
        onMouseOver={(event) => {
          { props.updateSelectOnHover(event) }
          { props.changeMainPhoto(event) }
        }}
        style={props.itemStyle}
        src={props.photo.url} />
    </li>
  )
}

export default MiniPhotoItem;