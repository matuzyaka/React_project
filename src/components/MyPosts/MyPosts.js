import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let posts = props.postsData.map(p => (
    <Post message={p.post} likes={p.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = document.getElementById('new-post').value
    //  неправильно взаимоействовать с DOM надо с Virtual DOM

    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.MyPosts}>
      <h3>MyPosts</h3>
      <div className={s.NewPost}>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.Posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
