import React from 'react';

const styleObj = {
  flex: 1,
  // height: '100%',
  // width: 'calc(100% - 58px)',
  maxWidth: 'calc(100% - 58px)',
  minHeight: '350px',
  maxHeight: '100%',
  paddingLeft: '58px',
  resizeMode: 'contain'
}

const MainPhoto = (props) => {
  return <img style={styleObj} src={props.currentPhoto.url} />
}

export default MainPhoto;