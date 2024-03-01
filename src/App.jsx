import './App.scss';
import Header from './components/Header/Header';
import VideoPlayListItem from './components/VideoPlayListItem/VideoPlayListItem';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideoList from './components/VideoList/VideoList';
import Comment from './components/Comment/Comment';

import videoList from './data/video-details.json';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Page/Home/Home';
import VideoUploadPage from './Page/VideoUploadPage/VideoUploadPage';
import PageNotFound from './Page/PageNotFound/PageNotFound';

function App() {
    // const [videoSelected, getActivedVideo] = useState(videoList[0]);
    // console.log(videoSelected);

    // function updateActiveVideo(clickedID) {
    //     const newActiveVideo = videoList.find((video) => video.id === clickedID);
    //     getActivedVideo(newActiveVideo);
    // }

    return (
        // <main className='app'>
        //     <Header />
        //     <VideoPlayListItem videoSelected={videoSelected} />

        //     <div className='app__bottom'>
        //         <div className='app__box'>
        //             <VideoDetails videoDescription={videoSelected} />
        //             <Comment videoList={videoList} videoSelected={videoSelected} updateActiveVideo={updateActiveVideo} />
        //         </div>

        //         <div className='app__list'>
        //             <VideoList videoList={videoList} videoSelected={videoSelected} updateActiveVideo={updateActiveVideo} />
        //         </div>
        //     </div>

        // </main>
        <main>
            <BrowserRouter>
                < Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/video-upload' element={<VideoUploadPage />} />

                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
