import logo from '../../assets/Logo/BrainFlix-logo.svg';
import search from '../../assets/Icons/search.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import upload from '../../assets/Icons/upload.svg';
import './Header.scss';
import {Link,useNavigate} from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleClick = (event) =>{
        const toUpload = () => {
            navigate('/video-upload');
        }
        toUpload();

    }
    return (
        <nav className='header'>
            <Link to="/" >
            <img className='header__logo' src={logo} alt="Logo" />
            </Link>
            <form className='header__search'>
                <input className='header__search-bar' type="text" name='search' placeholder='Search' />
                <img className='header__search-icon'src={search} alt="search logo" />
                <img className='header__search-avatar' src={avatar} alt="avatar" />
            </form>
           
            <button className='header__upload'>
                <img className='header__upload-icon' onClick={handleClick} src={upload} alt="upload icon" />
                UPLOAD
            </button>
        </nav>
    );
}


export default Header;