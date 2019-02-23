import React from 'react';
import MainPhoto from './components/mainPhoto';
import MiniPhotoList from './components/miniPhotoList';
import Axios from 'axios';

const styleObj = {
  display: 'grid',
  gridTemplateColumns: '8px 1fr',
  gridTemplateRows: '400px'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleKey: 22,
      currentPhoto: {
        url: `https://s3.amazonaws.com/picture-service-fec-bucket/folder60/space-1548139_1920.jpg`, id: 0
      },
      miniPhotos: [
        { url: `https://s3.amazonaws.com/picture-service-fec-bucket/folder60/space-1548139_1920.jpg`, id: 0 },
        { url: `https://s3.amazonaws.com/picture-service-fec-bucket/folder60/space-ship-model-2923803_640.png`, id: 1 },
        { url: `https://s3.amazonaws.com/picture-service-fec-bucket/folder60/Planet+Orbiting+Pair+of+Stars'.jpg`, id: 2 },
      ]
    }
    console.log('props ', this.props);
    this.changeMainPhoto = this.changeMainPhoto.bind(this);
  }
  dataToPhotoObj(data, index) {
    let currUrl = data.url;
    let currId = index;
    let currPhoto = { url: currUrl, id: currId }
    return currPhoto;
  }

  componentWillMount() {
    // console.log(this.props);
    if (this.state.exampleKey) {
      // console.log('inside if props.key');
      // Axios.get(`/id?key=${this.props.key}`)
      Axios.get(`/id/${this.state.exampleKey}`)
        .then(data => {
          console.log('data inside Axios get request in mount ', data);
          let photos = data.data.map((photo, index) => {
            return photo = this.dataToPhotoObj(photo, index);
          })
          console.log('photos ', photos);
          this.setState({
            currentPhoto: photos[0],
            miniPhotos: photos
          });
        }).catch(err => {
          console.log(err, ' <-- error in the componentWillMount get request');
        })

    } else {
      Axios.get('/random').then(data => {
        console.log('data, component will mount ', data.data);
        let currPhoto = this.dataToPhotoObj(data);
        let updatedMiniPhotos = [...this.state.miniPhotos];
        updatedMiniPhotos.shift();
        updatedMiniPhotos.unshift(currPhoto);
        this.setState({
          currentPhoto: currPhoto,
          miniPhotos: updatedMiniPhotos
        });
      })
    }
  }

  componentDidMount() {
    window.addEventListener('newPage', (event) => {
      let key = event.detail
      Axios.get(`id/${key}`)
        .then((results) => {
          // console.log(results.data, 'heyoooooo');
          // console.log('heyoooooo');
          let photos = results.data.map((photo, index) => {
            return photo = this.dataToPhotoObj(photo, index);
          })
          console.log('photos ', photos);
          this.setState({
            currentPhoto: photos[0],
            miniPhotos: photos
          });
        })
        .then()
        .catch((err) => console.log('oh no there was an error in Axios request', err))
    }, false);
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
    return (<div style={styleObj}>
      <div>
        <MiniPhotoList
          miniPhotos={this.state.miniPhotos}
          changeMainPhoto={this.changeMainPhoto} />
      </div>
      <div>
        <MainPhoto currentPhoto={this.state.currentPhoto} />
      </div>
    </div >);
  }
}

export default App;

// ReactDOM.render(<App exampleKey={60} />, document.getElementById("picture"));

