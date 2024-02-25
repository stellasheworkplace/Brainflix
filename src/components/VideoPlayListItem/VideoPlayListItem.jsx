import React from 'react';

function VideoPlayListItem(props) {
    let videoImage = props.videoSelected.image;
    let videoPlayer = props.videoSelected.video;

    console.log(videoImage);
    console.log(props);

    return (
        <main>
            <div className="main">
                <video width="100%" height="100%" poster={videoImage} controls>
                    <source src={videoPlayer}  className="main__video" alt='Playing Video' />
                </video>
            </div>
        </main>
    )
}

export default VideoPlayListItem;