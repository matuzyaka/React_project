import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.MyPosts}>
        <h3>MyPosts</h3>
        <div className={s.NewPost}>
            <div><textarea></textarea></div>
            <div>
                <button>Add post</button>
            </div>

        </div>
        <div className={s.Posts}>
            <Post message={'Hello!'} likes={13}/>
            <Post message={'It is my first post'} likes={5}/>
        </div>
    </div>
}

export default MyPosts;