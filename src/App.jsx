import './App.scss';
import Header from './components/Header/Header';
import VideoPlayListItem from './components/VideoPlayListItem/VideoPlayListItem';
import VideoDetails from './components/VideoDetails/VideoDetails';

//import videoDetail from './data/video-details.json';
import videoList from './data/video-details.json';

import {useState} from 'react';

function App() {

   // const[videoDetail, getVideoDetail] = useState(videoDetail);
    const[videoSelected, getActivedVideo] = useState(videoList[0]);
    console.log(videoSelected);

  return(
    <main>
    <Header />
    <VideoPlayListItem videoSelected = {videoSelected} />
    <div>
        <div>
            <VideoDetails videoDescription={videoSelected} />
        </div>
    </div>

    </main>
  );
}

export default App;
