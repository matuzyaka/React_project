import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <img
        src={
          "https://vignette.wikia.nocookie.net/avatar/images/1/1c/3%D1%8521_%D0%9A%D0%B0%D1%82%D0%B0%D1%80%D0%B0_%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82.jpg/revision/latest?cb=20130612094311&path-prefix=ru"
        }
        alt={'userLogo'}
      />
      {props.message}
      <div>
        <span>{props.likes} likes</span>
        <span> Like</span>
      </div>
    </div>
  );
};

export default Post;
