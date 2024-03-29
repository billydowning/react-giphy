import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "3o7btT1T9qpQZWhNlK"
    }
    this.search('dog');
  }




  search = (query) => {
    //TODO: API Call
    giphy('Fw4SeFoAkU7qtCThFPHLG9VXm5S9pke7').search({
      q: query,
      rating: 'g',
      limit: 20
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });

  }

  selectGif = (id) => {
    this.setState ({
      selectedGifId: id
    });
  }


  render () {


    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />

          <div className="selected-gif">
          <Gif id={this.state.selectedGifId}/>
          </div>
        </div>

        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
      );
  }
}
export default App;
