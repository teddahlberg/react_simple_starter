import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = //insert your Youtube API KEY here

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null 
    };
    // default initial search
    this.VideoSearch('deathbreed new world order');
  }
  VideoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0] 
      }); 
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.VideoSearch(term)}, 400);
    return (
      <div>
        <h1>TedTube</h1>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
