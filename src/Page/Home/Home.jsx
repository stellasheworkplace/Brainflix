import Header from '../../components/Header/Header';
import VideoPlayListItem from '../../components/VideoPlayListItem/VideoPlayListItem';

import axios from 'axios';
import { useState, useEffect } from 'react';


function Home() {
    const [videoSelected, setActivedVideo] = useState([]);
    const [isLoadinng, setIsLoading] = useState(true);
    const [hadError, setHasError] = useState(false);

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
    } , []);

return (
    <main>
    <Header />
     <VideoPlayListItem videoSelected={videoSelected} />

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