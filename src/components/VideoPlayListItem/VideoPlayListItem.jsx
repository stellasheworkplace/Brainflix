import React from 'react';

function VideoPlayListItem({videos}) {
    console.log(videos);
    const {image,video} = videos;

    return (
        <section>
            <div className="main">
                <video width="100%" height="100%" poster={image} controls>
                    <source src={video}  className="main__video" alt='Playing Video' />
                </video>
            </div>
        </section>
    )
}

export default VideoPlayListItem;