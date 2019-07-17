
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
  _callSubscriber() {console.log('state changed')},
  addPost () {
    let newPost = {
      id: 2,
      post: this._state.profilePage.newPostText,
      likes: 0
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber();
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
  addMessage (postMessage) {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber();
  },
  updateNewMessageText (newText){
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber();
  },
  subscribe (observer){
    this._callSubscriber = observer
  },
  dispatch (action) {
      if (action.type === 'ADD-POST') {
        let newPost = {
          id: 2,
          post: this._state.profilePage.newPostText,
          likes: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber();
      }
      else if (action.type === 'UPDATE-NEW-POST-TEXT'){
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber();
      }
      else if (action.type === 'ADD-MESSAGE'){
        let newMessage = {
          id: 4,
          message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber();
      }
      else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
        this._state.dialogsPage.newMessageText = action.newText;
        this._callSubscriber();
      }
  }

}

export default store;
