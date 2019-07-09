import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
  { id: 0, post: "Hello", likes: 13 },
  { id: 1, post: "It is my first post", likes: 5 }
];

let posts = postsData.map(p=><Post message = {p.post} likes={p.likes}/>)

const MyPosts = () => {
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
      <div className={s.Posts}>
          {posts}
      </div>
    </div>
  );
};

export default MyPosts;
