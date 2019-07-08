import React from 'react'
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return <div className={s.dialog + ' ' +s.active}>
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
            {props.name}
        </NavLink>
    </div>}

const Message = (props) => {
        return <div className={s.messages}>{props.message}</div>
}

const Dialogs = () => {
    return <div className={s.Content}>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Sasha'} id={'0'}/>
                <DialogItem name={'Petya'} id={'1'}/>
                <DialogItem name={'Siroja'} id={'2'}/>
                <DialogItem name={'Tanya'} id={'3'}/>
                <DialogItem name={'Jorik'} id={'4'}/>
                <DialogItem name={'Katya'} id={'5'}/>
                <DialogItem name={'Manya'} id={'6'}/>
                <DialogItem name={'Sasha'} id={'7'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'how are you?'}/>
                <Message message={'I\'m fine'}/>
                <Message message={'Good bye'}/>
            </div>
        </div>
        <div>

        </div>
    </div>
}

export default Dialogs;