//jshint esversion:9

import React from 'react';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

import youtube from '../api/youtube';

import './App.css';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    onSearchSubmit = async (term) => {
        const response = await youtube.get( '/search', {
            params: {
                q: term
            }
        });
        console.log(response);
        this.setState({ videos: response.data.items});
        this.setState({selectedVideo: this.state.videos[0]});
    }

    onVideoSelect = (video) => {
        console.log('video selected');
        console.log(video);
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar searchVideos={this.onSearchSubmit} />
                <div className="video-section">
                    <VideoDetail selectedVideo={this.state.selectedVideo} />
                    <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                </div>

            </div>
        );
    }
}

export default App;