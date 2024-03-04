import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Page/Home/Home';
import VideoUploadPage from './Page/VideoUploadPage/VideoUploadPage';
import PageNotFound from './Page/PageNotFound/PageNotFound';

function App() {

    return (
        <main>
            <BrowserRouter>
                < Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/videos/:id' element={<Home />} />
                    <Route path='/video-upload' element={<VideoUploadPage />} />

                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
