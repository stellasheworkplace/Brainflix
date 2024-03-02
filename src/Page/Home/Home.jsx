import Header from '../../components/Header/Header';
import VideoPlayListItem from '../../components/VideoPlayListItem/VideoPlayListItem';
import Comment from '../../components/Comment/Comment';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Home() {
    const [videoSelected, setActivedVideo] = useState({});
    const [videoInfo, setVideoInfo] = useState([]);
    const params = useParams();

    const [isLoadinng, setIsLoading] = useState(true);
    const [hadError, setHasError] = useState(false);

    //fetch all video data
    useEffect(() => {
        const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=861ebcf7-3b96-48cc-9e68-da2d9a961d28";
       
       
        const fetchVideos = async () => {
            try {
                const response = await axios.get(API_URL);

                setIsLoading(false);
                setActivedVideo(response.data);
            } catch (error) {
                setIsLoading(false);
                setHasError(true);
            }
        };
        fetchVideos();
    }, []);

    //fetch single video
    useEffect(() => {
        const API_IDURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${parmas.id}?api_key=861ebcf7-3b96-48cc-9e68-da2d9a961d28";

        const fetchSingleVideo = async () => {
            try {
                const selectedResponse = await axios.get(API_IDURL);
                setIsLoading(false);
                setVideoInfo(response.data);
            } catch (error) {
                setIsLoading(false);
                setHasError(true);
            }

        };
        fetchSingleVideo();
    },[params.id]);

    return (
        <main>
            <Header />
            <VideoPlayListItem videoSelected={videoSelected} />
            <Comment commentInfo={videoInfo} videoSelected={videoSelected} />


            {/* //<div className='app__bottom'>
    //         <div className='app__box'>
    //             <VideoDetails videoDescription={videoSelected} />
    //             <Comment videoList={videoList} videoSelected={videoSelected} />
    //         </div>

    //         <div className='app__list'>
    //             <VideoList videoList={videoList} videoSelected={videoSelected} />
    //         </div>
    //     </div> */}
        </main>


    );
}

export default Home;