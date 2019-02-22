import React from 'react';
import MiniPhotoItem from './miniPhotoItem.jsx'

const styleObj = {
  listStyle: 'none',
  display: 'inline-block',
  marginBlockStart: '0px',
  paddingInlineStart: '0px',
  paddingRight: '6px',
  position: 'absolute'
}

const selectedStyle = {
  flex: 1,
  height: '50px',
  width: '50px',
  border: 'solid #ff0000d1 1px',
  boxShadow: '0 0 2px 1px #ffa500',
  backgroundColor: 'transparent',
  resizeMode: 'contain',
}
const unselectedStyle = {
  flex: 1,
  height: '50px',
  width: '50px',
  border: 'solid black 1px',
  backgroundColor: 'transparent',
  resizeMode: 'contain',
}

class MiniPhotoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: this.props.miniPhotos[0].id
    }
    console.log('this.props.miniphotos ', this.props.miniPhotos);

    this.updateSelectOnHover = this.updateSelectOnHover.bind(this);
  }

  // console.log('inside miniPhotoList');
  updateSelectOnHover(event) {
    let currId = +event.target.id;
    // console.log(event.target.id);
    this.setState({
      selectedId: currId
    });
  }

  render() {
    return (
      <ul style={styleObj}>
        {
          this.props.miniPhotos.map(item => {
            if (item.id === this.state.selectedId) {
              return <MiniPhotoItem
                itemStyle={selectedStyle}
                photo={item}
                changeMainPhoto={this.props.changeMainPhoto}
                updateSelectOnHover={this.updateSelectOnHover} />
            }
            return <MiniPhotoItem
              itemStyle={unselectedStyle}
              photo={item}
              changeMainPhoto={this.props.changeMainPhoto}
              updateSelectOnHover={this.updateSelectOnHover} />
          })
        }
      </ul>
    )
  }
}

export default MiniPhotoList;