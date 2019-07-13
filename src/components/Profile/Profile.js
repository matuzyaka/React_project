import React from "react";
import s from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <div className={s.Content}>
      <div className={s.ContentMainImage}>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1GMcvcrr4QIARmG7IAZFXg8T9we8tsHE8tt0aqwdE7OYCIC4"
          }
        />
      </div>

      <ProfileInfo />

      <MyPosts postsData={props.profilePage.postsData}
               newPostText={props.profilePage.newPostText}
               addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};

export default Profile;
