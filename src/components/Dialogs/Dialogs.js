import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogs = props.state.dialogsData.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messages = props.state.messagesData.map(m => (
    <Message message={m.message} />
  ));

  let newMessageText = React.createRef();

  let addMessage = () => {
      let newMessage = newMessageText.current.value;
        alert(newMessage)
  }



  return (
    <div className={s.Content}>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogs}</div>
        <div className={s.messages}>{messages}
          <div><textarea ref={newMessageText}/></div>
            <div><button onClick={addMessage}>Send message</button></div></div>
      </div>
    </div>
  );
};

export default Dialogs;
