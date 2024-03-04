import hero from '../../assets/Images/Upload-video-preview.jpg';
import icon from '../../assets/Icons/publish.svg';
import './UploadVideo.scss';

import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


function UploadVideo() {

    const navigate = useNavigate();

    const addVideo = (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        console.log(title);
        const description = event.target.description.value;

        if (!title || !description) {
            alert("Video failed to upload, fileds are empty!");
            return;
        }

        alert("Thanks for publishing your video!");

        setTimeout(() => {
            navigate("/");
        }, 2000);
    };

    return (

        <>
            <section className='main'>
                <h1 className='main__title'>Upload Video</h1>

                <div className='main__box'>
                    <div className='main__hero'>
                        <h3 className='main__subtitle'>VIDEO THUMBNAIL</h3>
                        <img className='main__image' src={hero} alt="hero image" />
                    </div>

                    <form onSubmit={addVideo}>
                        <label >TITLE YOUR VIDEO <input className='title' type="text" name="title" placeholder='Add a title to your video' /></label>
                        <label >ADD A VIDEO DESCRIPTION <input className='description' type="text" name="description" placeholder='Add a description to your video' /></label>
                        <button className='button'>PUBLISH</button>
                    </form>

                </div>

                <div className='main__button'>
                  
                    <img className='icon' src={icon} alt="publish icon" />
                    <Link className='link' to="/">CANCEL</Link>
                </div>

            </section>
        </>

    );
}

export default UploadVideo;