import React from 'react';
import ReactDOM from 'react-dom';
import MainPhoto from './components/mainPhoto';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: `https://s3.amazonaws.com/picture-service-fec-bucket/A+Tiny+Planet+Artist+Concept.jpg`,
      miniPhotos: []
    }
  }
  render() {
    // return (<img style={this.state.imgStyle} src="https://s3.amazonaws.com/picture-service-fec-bucket/A+Tiny+Planet+Artist+Concept.jpg" />);
    return (<div>

      <MainPhoto currentPhoto={this.state.currentPhoto} />
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

