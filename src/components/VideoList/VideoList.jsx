import './VideoList.scss';
import { Link } from 'react-router-dom';

function VideoList({ videos,videoSelected }) {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    return (
        <>
            <section className="video-list">
                <h3 className="video-list__title">NEXT VIDEOS</h3>
                <ul className="video-list__nav">
                    {videos.filter((video) => video.id !== videoSelected.id).map((video) => {
                        return (
                            <li key={video.id} className="video-list__nav-item">
                                <Link className='video-list__link' to={`/videos/${video.id}`}>
                                    <div>
                                        <img className="video-image" src={`${baseUrl}/images/${image}`} alt="image" />
                                    </div>

                                    <div className='video-info'>
                                        <p className='video-info__title'>{video.title}</p>
                                        <p className='video-info__channel'>{video.channel}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </section>
        </>
    );
}

export default VideoList;
