import React from 'react';
import ReactDOM from 'react-dom';
import MainPhoto from './components/mainPhoto';
import MiniPhotoList from './components/miniPhotoList';
import Axios from 'axios';

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
  componentWillMount() {
    console.log(this.props);
    Axios.get('/random').then(data => {
      console.log('data, component will mount ', data.data);
      let currUrl = data.data.url;
      let currId = data.data.key;
      let currPhoto = { url: currUrl, id: currId }
      let updatedMiniPhotos = [...this.state.miniPhotos];
      updatedMiniPhotos.shift();
      updatedMiniPhotos.unshift(currPhoto);
      this.setState({
        currentPhoto: currPhoto,
        miniPhotos: updatedMiniPhotos
      });
    })
  }

  changeMainPhoto(event) {
    let item = event.currentTarget;
    let newMainPhoto = { id: +item.id, url: item.src };
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

