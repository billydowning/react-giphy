import React, { Component } from 'react';


class Gif extends Component {

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render () {
    console.log('Gif Render' + this.props.id);
    if (!this.props.id){
      return null;
    }

    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="" className="gif"
      onClick={this.handleClick}/>
      );
  }
}

export default Gif;
