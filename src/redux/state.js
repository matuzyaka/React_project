import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";

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
      newMessageText: "Text me"
    }
  },

  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    // navbarReducer()

    this._callSubscriber(this._state);
  }
};

export default store;
