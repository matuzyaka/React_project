
let rerenderEntireTree

let state = {
  profilePage: {
    postsData: [
      { id: 0, post: "Hello", likes: 13 },
      { id: 1, post: "It is my first post", likes: 5 }
    ],
    newPostText: "start text"
  },
  dialogsPage: {
    dialogsData: [
      { id: 0, name: "Sasha" },
      { id: 1, name: "Petya" },
      { id: 2, name: "Siroja" },
      { id: 3, name: "Tanya" },
      { id: 4, name: "Jorik" },
      { id: 5, name: "Katya" },
      { id: 6, name: "Manya" }
    ],

    messagesData: [
      { id: 0, message: "Hello" },
      { id: 1, message: "how are you?" },
      { id: 2, message: "I'm fine" },
      { id: 3, message: "Good bye" }
    ],
    newMessageText: 'Text me'
  }
};

export const addPost = postMessage => {
  let newPost = {
    id: 2,
    post: state.profilePage.newPostText,
    likes: 0
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree();
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
};

export const addMessage = postMessage => {
  let newMessage = {
    id: 4,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree();
};

export const updateNewMessageText = newText => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree();
};

export let subscribe =(observer)=> {
rerenderEntireTree = observer
}

export default state;
