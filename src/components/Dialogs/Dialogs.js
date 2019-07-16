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


  let onMessageChange = () => {
    let text = newMessageText.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.Content}>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogs}</div>
        <div className={s.messages}>{messages}
          <div><textarea ref={newMessageText} onChange={onMessageChange} value={props.state.newMessageText}/></div>
            <div>
              <button
                  onClick={props.addMessage}>
                Send message
              </button>
            </div></div>
      </div>
    </div>
  );
};

export default Dialogs;
