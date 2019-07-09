import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogsData = [
  { id: 0, name: "Sasha" },
  { id: 1, name: "Petya" },
  { id: 2, name: "Siroja" },
  { id: 3, name: "Tanya" },
  { id: 4, name: "Jorik" },
  { id: 5, name: "Katya" },
  { id: 6, name: "Manya" }
];

let messagesData = [
  { id: 0, message: "Hello" },
  { id: 1, message: "how are you?" },
  { id: 2, message: "I'm fine" },
  { id: 3, message: "Good bye" }
];

let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

let messages = messagesData.map(m => <Message message={m.message} />);

const Dialogs = () => {
  return (
    <div className={s.Content}>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogs}</div>
        <div className={s.messages}>{messages}</div>
      </div>
    </div>
  );
};

export default Dialogs;
