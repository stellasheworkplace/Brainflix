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
    
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const params = useParams();

    //fetch all video data
    useEffect(() => {
        //const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=861ebcf7-3b96-48cc-9e68-da2d9a961d28";
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`${baseUrl}/videos`);
                
                setVideoInfo(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchVideos();
    }, []);
    

    //fetch single video
    useEffect(() => {
        //const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=861ebcf7-3b96-48cc-9e68-da2d9a961d28";
        //const API_URLID = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${params.id}?api_key=861ebcf7-3b96-48cc-9e68-da2d9a961d28`;
        const fetchSingleVideo = async () => {
            try {
                if (!params.id) {
                    const response = await axios.get(`${baseUrl}/videos`);
                    const selectedResponse = await axios.get(`${baseUrl}/videos/${response.data[0].id}`);
                    
                    setActivedVideo(selectedResponse.data);
                } else {
                    const selectedResponse = await axios.get(`${baseUrl}/videos/${params.id}`);
                    setActivedVideo(selectedResponse.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchSingleVideo();
    }, [params.id]);

    return (
        <>
        <main className='app'>
            <Header />
            <VideoPlayListItem videos={videoSelected.image} />

            <div className='app__bottom'>
                <div className='app__box'>
                <VideoDetails videoDescription={videoSelected} />

                <div className='app__comments'>
                <Comment comments={videoInfo} videoSelected={videoSelected} />
                </div>
            </div>
              
                <div className='app__list'>
                    <VideoList videos={videoInfo} videoSelected={videoSelected}/>
                </div>
            </div>
        </main>
        </>
    );
}

export default Home;