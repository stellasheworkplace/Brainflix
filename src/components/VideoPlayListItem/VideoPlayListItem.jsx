import React from 'react';
import './VideoPlayListItem.scss';


function VideoPlayListItem({videos}) {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    return (
        <section>
            <div className="main">
                <video className="main__box" width="100%" height="100%" poster={`${baseUrl}/${videos}`} controls/>
            </div>
        </section>
    )
}

export default VideoPlayListItem;