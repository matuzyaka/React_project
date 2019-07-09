import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let posts = props.state.postsData.map(p => (
    <Post message={p.post} likes={p.likes} />
  ));

  return (
    <div className={s.MyPosts}>
      <h3>MyPosts</h3>
      <div className={s.NewPost}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.Posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
