import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {
    state = {}
    render() {
        const video = this.props.video;
        const onVideoSelect = this.props.onVideoSelect;

        return (
            <div onClick={() => onVideoSelect(video)} className="item video-item">
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={this.props.video.description}/>
                <div className="content">
                    <div className="header">{video.snippet.title}</div>

                </div>
                
            </div>
        );
    }
}

export default VideoItem;