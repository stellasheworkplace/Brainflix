import './App.scss';
import Header from './components/Header/Header';
import VideoPlayListItem from './components/VideoPlayListItem/VideoPlayListItem';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideoList from './components/VideoList/VideoList';
import Comment from './components/Comment/Comment';

import videoList from './data/video-details.json';

import {useState} from 'react';


function App() {

    //const[videoDetail, getVideoDetail] = useState(videoList);
    const[videoSelected, getActivedVideo] = useState(videoList[0]);
    console.log(videoSelected);

    function updateActiveVideo(clickedID){
        //const newActiveVideo = videoDetail.find((video) => video.id === clickedID);
        const newActiveVideo = videoList.find((video) => video.id === clickedID);
        getActivedVideo(newActiveVideo);
    }

  return(
    <main>
    <Header />
    <VideoPlayListItem videoSelected = {videoSelected} />
    <div>
        <div>
            <VideoDetails videoDescription={videoSelected} />
        </div>

        <div>
            <Comment videoList={videoList} videoSelected={videoSelected} updateActiveVideo={updateActiveVideo} />
        </div>
    </div>

    <div>
        <VideoList videoList={videoList} videoSelected={videoSelected} updateActiveVideo={updateActiveVideo} />
    </div>

    </main>
  );
}

export default App;
