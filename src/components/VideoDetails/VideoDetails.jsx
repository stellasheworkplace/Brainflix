import view from '../../assets/Icons/views.svg';
import like from '../../assets/Icons/likes.svg';
import '../VideoDetails/VideoDetails.scss';

function VideoDetails({videoDescription}) {

const{
    title,
    channel,
    description,
    views,
    likes,
    timestamp
} = videoDescription;

    return (

        <section className='video'>
            <h3 className='video__title'> {title}</h3>
            <div className='video__info'>
                <div className='video__info--right'>
                    <h1 className='video__info--channel'>
                        By {channel}
                    </h1>
                    <span className='video__info--date video__info--subtitle'>{new Date(timestamp).toLocaleDateString('en-US')}</span>
                </div>
                
                <div className='video__info--left'>
                    <div>
                    <img className='video__views' src={view} alt="icon" />
                    <span className='video__info--subtitle video__info--num'>
                        {views}
                    </span>
                    </div>
                    <div>
                    <img className='video__likes' src={like} alt="icon" />
                    <span className='video__info--subtitle video__info--nums'>
                        {likes}
                    </span>
                    </div>
                </div>
            </div>

            <p className = 'video__description'>
                {description}
            </p>
        </section>
    );
}

export default VideoDetails;