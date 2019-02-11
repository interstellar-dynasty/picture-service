import React from 'react';

const styleObj = {
  flex: 1,
  height: '100%',
  width: '100%',
  resizeMode: 'contain'
}

const MainPhoto = (props) => {
  return <img style={styleObj} src={props.currentPhoto} />
}

export default MainPhoto;