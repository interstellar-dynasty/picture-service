import React from 'react';
import ReactDOM from 'react-dom';
import MainPhoto from './components/mainPhoto';
import MiniPhotoList from './components/miniPhotoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: { url: `https://s3.amazonaws.com/picture-service-fec-bucket/A+Tiny+Planet+Artist+Concept.jpg`, id: 0 },
      miniPhotos: [
        { url: `https://s3.amazonaws.com/picture-service-fec-bucket/A+Tiny+Planet+Artist+Concept.jpg`, id: 0 },
        { url: `https://s3.amazonaws.com/picture-service-fec-bucket/Ancient+Planet+in+a+Globular+Cluster+Core.jpg`, id: 1 },
        { url: `https://s3.amazonaws.com/picture-service-fec-bucket/Galactic+wreckage+in+Stephan's+Quintet.jpg`, id: 2 },
        { url: `https://s3.amazonaws.com/picture-service-fec-bucket/Possible+Disintegrating+Planet+Artist+Concept.jpg`, id: 3 },
        { url: `https://s3.amazonaws.com/picture-service-fec-bucket/dust+lanes+in+NGC+7049.jpg`, id: 4 }
      ]
    }
    this.changeMainPhoto = this.changeMainPhoto.bind(this);
  }

  changeMainPhoto(event) {
    // console.log(event.currentTarget.src);
    let item = event.currentTarget;
    let newMainPhoto = { id: item.id, url: item.src };
    this.setState({
      currentPhoto: newMainPhoto,
    });
  }

  render() {
    // return (<img style={this.state.imgStyle} src="https://s3.amazonaws.com/picture-service-fec-bucket/A+Tiny+Planet+Artist+Concept.jpg" />);
    return (<div>
      <MiniPhotoList
        miniPhotos={this.state.miniPhotos}
        changeMainPhoto={this.changeMainPhoto} />
      <MainPhoto currentPhoto={this.state.currentPhoto} />
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

