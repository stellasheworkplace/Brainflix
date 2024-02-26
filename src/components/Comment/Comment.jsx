import './Comment.scss';

import avatar from '../../assets/Images/Mohan-muruge.jpg';
import icon from '../../assets/Icons/add_comment.svg';


function Comment(){

    return(
        <main className='comment'>
            <h3 className="commennt__title">3 Comments</h3>
            <div>
            <img className="comment__image" src={avatar} alt="avater image" />
            </div>

            <div>
                <h2>JOIN THE CONVERSATION</h2>
                <form className='comment__form'>
                    <label for="comment__info">INFO</label>
                    <input className='comment__input' type="text" placeholder='Add a new comment' name="comment" />

                    <button type='submit'>COMMENT</button>
                </form>


            </div>


        </main>

        

    );
}

export default Comment;