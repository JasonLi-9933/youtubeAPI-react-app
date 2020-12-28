import React from 'react';

class VideoDetail extends React.Component {
    state = {}
    render() {
        if (!this.props.selectedVideo) {
            return (
                <div className="ui segment">
                    <h3>Please select a video.</h3>
                </div>
            )
        }

        const videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;

        return (
            <div className="video-detail">
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc}></iframe>
                </div>
                <div className="ui segment">
                    <h3>{this.props.selectedVideo.snippet.title}</h3>
                    <p>{this.props.selectedVideo.snippet.description}</p>
                </div>
            </div>

        );
    }
}

export default VideoDetail;