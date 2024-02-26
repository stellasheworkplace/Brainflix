import './Comment.scss';

import avatar from '../../assets/Images/Mohan-muruge.jpg';
import icon from '../../assets/Icons/add_comment.svg';
import grey from '../../assets/Images/icon-like.jpeg';

function Comment(props) {

    //let users = props.videoSelected.comments;

    // for(let i=0; i< users.length; i++){
    //     const user = users[i];
    // }
    // const {
    //     name,
    //     date,
    //     comment
    // } = comment;

    // let i = 1;
    
    // for( let i = 0; i< 3; i++){
    //     i += 1;
    // }

    return (
        <>
            <main className='comment'>
                <h3 className="commennt__title">3 Comments</h3>
                <div className='comment__upload'>
                    <div className='comment__upload--right'>
                        <img className="comment__image" src={avatar} alt="avater image" />
                    </div>

                    <div className='comment__upload--left'>
                        <h2>JOIN THE CONVERSATION</h2>
                        <form className='comment__form'>
                            <div>
                                <label for="comment__info">INFO</label>
                                <input className='comment__input' type="text" placeholder='Add a new comment' name="comment" />
                            </div>

                            <div>
                                <button type='submit'>COMMENT</button>
                                <img src={icon} alt="comment icon" className='comment__logo' />
                            </div>
                        </form>
                    </div>
                </div>

                <ul className='comment__list'>
                    <li>
                        <img src={grey} alt="empty avatar" />
                        <div>
                            <span>{props.videoSelected.comments[0].name}</span>
                            <span>{new Date(props.videoSelected.comments[0].timestamp).toLocaleDateString('en-US')}</span>
                        </div>

                        <p>
                            {props.videoSelected.comments[0].comment}
                        </p>
                    </li>

                    <li>
                        <img src={grey} alt="empty avatar" />
                        <div>
                            <span>{props.videoSelected.comments[1].name}</span>
                            <span>{new Date(props.videoSelected.comments[1].timestamp).toLocaleDateString('en-US')}</span>
                        </div>

                        <p>
                            {props.videoSelected.comments[1].comment}
                        </p>
                    </li>

                    <li>
                        <img src={grey} alt="empty avatar" />
                        <div>
                            <span>{props.videoSelected.comments[2].name}</span>
                            <span>{new Date(props.videoSelected.comments[2].timestamp).toLocaleDateString('en-US')}</span>
                        </div>

                        <p>
                            {props.videoSelected.comments[2].comment}
                        </p>
                    </li>
                </ul>
            </main>


        </>
    );
}

export default Comment;