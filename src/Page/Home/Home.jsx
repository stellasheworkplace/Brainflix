import Header from '../../components/Header/Header';
import VideoPlayListItem from '../../components/VideoPlayListItem/VideoPlayListItem';
import Comment from '../../components/Comment/Comment';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import VideoList from '../../components/VideoList/VideoList';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Home() {
    const [videoInfo, setVideoInfo] = useState([]);
    const [videoSelected, setActivedVideo] = useState({});
    
    const params = useParams();

    const [isLoadinng, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    //fetch all video data
    useEffect(() => {
        const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=861ebcf7-3b96-48cc-9e68-da2d9a961d28";
        const fetchVideos = async () => {
            try {
                const response = await axios.get(API_URL);
                
                setIsLoading(false);
                setVideoInfo(response.data);
            } catch (error) {
                setIsLoading(false);
                setHasError(true);
            }
        };
        fetchVideos();
    }, []);
    

    //fetch single video
    useEffect(() => {
        const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=861ebcf7-3b96-48cc-9e68-da2d9a961d28";
        const API_URLID = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${params.id}?api_key=861ebcf7-3b96-48cc-9e68-da2d9a961d28`;
        const fetchSingleVideo = async () => {
            try {
                if (!params.id) {
                    const response = await axios.get(API_URL);
                    const selectedResponse = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${response.data[0].id}?api_key=861ebcf7-3b96-48cc-9e68-da2d9a961d28`);
                    
                    setIsLoading(false);
                    setActivedVideo(selectedResponse.data);
                } else {
                    const selectedResponse = await axios.get(API_URLID);
                    setActivedVideo(selectedResponse.data);
                }
            } catch (error) {
                setIsLoading(false);
                setHasError(true);
            }
        };
        fetchSingleVideo();
    }, [params.id]);

    if(hasError){return <p>Error loading video.</p>}

    if(isLoadinng){return <p>Loading...</p>}

    if(videoInfo.length === 0){return <p>No video avaiable</p>}

    return (
        <main className='app'>
            <Header />
            <VideoPlayListItem videos={videoSelected} />

            <div className='app__bottom'>
                <div className='app__box'>
                <VideoDetails videoDescription={videoSelected} />
                <Comment comments={videoInfo} videoSelected={videoSelected} />
                </div>

                <div className='app__list'>
                    <VideoList videos={videoInfo} videoSelected={videoSelected}/>
                </div>
            </div>
        </main>
    );
}

export default Home;