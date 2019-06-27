import React from 'react';

const Profile = () =>{
    return <div className={'Profile'}>
        <div className={'ContentMainImage'}>
            <img  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1GMcvcrr4QIARmG7IAZFXg8T9we8tsHE8tt0aqwdE7OYCIC4'}/>
        </div>

        <div className={'CsbImg'}>
            <img src={'https://i1.sndcdn.com/avatars-000487873119-n9avm7-t500x500.jpg'}/>
        </div>
        <div className={'CsbDescription'}>
            good boy
        </div>

        <div className={'MyPosts'}>
            <div className={'NewPost'}>

            </div>
            <div className={'Posts'}>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;