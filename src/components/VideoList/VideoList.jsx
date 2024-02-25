//import VideoListItem from '../VideoListItem/VideoListItem';

function VideoList(props) {

    let className = "video-list-item";
    //let videoImage = props.videoSelected.image;

    if(props.videoList.id === props.videoSelected.id){
        className += "video-list-item--selected";
    }

    // const handleClick=() => {
    //     props.updateActiveVideo(video.id);
    // }

    return (
    <>
       <h3>NEXT VIDEOS</h3>
        <ul className="videos-list">
            {props.videoList.filter((video) => video.id !== props.videoSelected.id).map((video) => {
                return (
                   <li onClick={() => { props.updateActiveVideo(video.id);}} key={video.id} className={className}>
                    <div>
                        <img src={video.image} alt="" />
                    </div>

                    <div>
                        <h3>{video.title}</h3>
                        <p>{video.channel}</p>
                    </div>

                   </li>
                )
            })}
        </ul>
        </>
    );
}

export default VideoList;
