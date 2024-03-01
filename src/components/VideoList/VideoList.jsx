import './VideoList.scss';


function VideoList(props) {
    return (
        <>
            <section className="video-list">
                <h3 className="video-list__title">NEXT VIDEOS</h3>
                <ul className="video-list__nav">
                    {props.videoList.filter((video) => video.id !== props.videoSelected.id).map((video) => {
                        return (
                            <li onClick={() => { props.updateActiveVideo(video.id); }} key={video.id} className="video-list__nav--item">
                                <div>
                                    <img className="video-image" src={video.image} alt="image" />
                                </div>

                                <div className='video-info'>
                                    <p className='video-info__title'>{video.title}</p>
                                    <p className='video-info__channel'>{video.channel}</p>
                                </div>

                            </li>
                        )
                    })}
                </ul>

            </section>
        </>
    );
}

export default VideoList;
