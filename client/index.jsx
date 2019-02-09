import React from 'react';
import ReactDOM from 'react-dom';

const obj = {
  flex: 1,
  height: '100%',
  width: '100%',
  resizeMode: 'contain'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ,
    }
  }
  render() {
    // return (<img style={this.state.imgStyle} src="https://s3.amazonaws.com/picture-service-fec-bucket/A+Tiny+Planet+Artist+Concept.jpg" />);
    return (<img style={obj} src="https://s3.amazonaws.com/picture-service-fec-bucket/+Cone+Nebula+(in+NGC+2264).jpg" />);
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

