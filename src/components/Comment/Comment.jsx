import './Comment.scss';

import avatar from '../../assets/Images/Mohan-muruge.jpg';
import icon from '../../assets/Icons/add_comment.svg';
import grey from '../../assets/Images/icon-like.jpeg';

function Comment(props) {
    return (
        <>
            <div className='comment'>
                <h3 className="commennt__title">3 Comments</h3>
                <div className='comment__upload'>
                    <div className='comment__right'>
                        <img className="comment__image" src={avatar} alt="avater image" />
                    </div>

                    <div className='comment__left'>
                        <h2>JOIN THE CONVERSATION</h2>
                        <form className='comment__form'>
                            <div className='comment__box'>
                                <input className='comment__input' type="text" placeholder='Add a new comment' name="comment" />
                            </div>

                            <div className='comment__button'>
                                <button type='submit'>COMMENT</button>
                                <img src={icon} alt="comment icon" className='comment__logo' />
                            </div>
                        </form>
                    </div>
                </div>

                <ul className='comment__list'>
                    <li className='comment__container'>
                        <div className='comment__lefts'>
                            <img className='comment__images' src={grey} alt="empty avatar" />
                        </div>

                        <div className='comment__rights'>
                            <div className='comment__namedate'>
                                <span className='comment__name'>{props.videoSelected.comments[0].name}</span>
                                <span className='comment__date'>{new Date(props.videoSelected.comments[0].timestamp).toLocaleDateString('en-US')}</span>
                            </div>
                            <p>
                                {props.videoSelected.comments[0].comment}
                            </p>
                        </div>
                    </li>

                    <li className='comment__container'>
                        <div className='comment__lefts'>
                            <img className='comment__images' src={grey} alt="empty avatar" />
                        </div>

                        <div className='comment__rights'>
                            <div className='comment__namedate'>
                                <span className='comment__name'>{props.videoSelected.comments[1].name}</span>
                                <span className='comment__date'>{new Date(props.videoSelected.comments[1].timestamp).toLocaleDateString('en-US')}</span>
                            </div>

                            <p>
                                {props.videoSelected.comments[1].comment}
                            </p>
                        </div>
                    </li>

                    <li className='comment__container'>

                        <div className='comment__lefts'>
                            <img className='comment__images' src={grey} alt="empty avatar" />
                        </div>

                        <div className='comment__rights'>
                            <div className='comment__namedate'>
                                <span className='comment__name'>{props.videoSelected.comments[2].name}</span>
                                <span className='comment__date'>{new Date(props.videoSelected.comments[2].timestamp).toLocaleDateString('en-US')}</span>
                            </div>

                            <p>
                                {props.videoSelected.comments[2].comment}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Comment;