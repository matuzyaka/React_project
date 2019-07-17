
let store = {
    _state: {
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
      newMessageText: 'Text me',

    }
  },

  getState (){return this._state},
  rerenderEntireTree() {console.log('state changed')},
  addPost (postMessage) {
    let newPost = {
      id: 2,
      post: this._state.profilePage.newPostText,
      likes: 0
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this.rerenderEntireTree();
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this.rerenderEntireTree();
  },
  addMessage (postMessage) {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this.rerenderEntireTree();
  },
  updateNewMessageText (newText){
    this._state.dialogsPage.newMessageText = newText;
    this.rerenderEntireTree();
  },
  subscribe (observer){
    this.rerenderEntireTree = observer
  },


}

export default store;
