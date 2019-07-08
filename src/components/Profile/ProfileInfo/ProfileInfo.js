import React from 'react';
import s from './ProfileInfo.module.css'
import MyPosts from '../../MyPosts/MyPosts'

const ProfileInfo = () =>{
    return <div className={s.ContentSecondaryBlock}>

        <div className={s.CsbImg}>
            <img src={'https://i1.sndcdn.com/avatars-000487873119-n9avm7-t500x500.jpg'}/>
        </div>
        <div className={s.CsbDescription}>
            good boy
        </div>


    </div>
}

export default ProfileInfo;