import React from 'react';
import ReactDOM from 'react-dom';
import MainPhoto from './components/mainPhoto';
import MiniPhotoList from './components/miniPhotoList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: `https://s3.amazonaws.com/picture-service-fec-bucket/A+Tiny+Planet+Artist+Concept.jpg`,
      miniPhotos: [
        `https://s3.amazonaws.com/picture-service-fec-bucket/Ancient+Planet+in+a+Globular+Cluster+Core.jpg`,
        `https://s3.amazonaws.com/picture-service-fec-bucket/Galactic+wreckage+in+Stephan's+Quintet.jpg`,
        `https://s3.amazonaws.com/picture-service-fec-bucket/Possible+Disintegrating+Planet+Artist+Concept.jpg`,
        `https://s3.amazonaws.com/picture-service-fec-bucket/dust+lanes+in+NGC+7049.jpg`]
    }
  }
  render() {
    // return (<img style={this.state.imgStyle} src="https://s3.amazonaws.com/picture-service-fec-bucket/A+Tiny+Planet+Artist+Concept.jpg" />);
    return (<div>
      <MiniPhotoList miniPhotos={this.state.miniPhotos} />
      <MainPhoto currentPhoto={this.state.currentPhoto} />
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

