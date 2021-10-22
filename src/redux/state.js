export let store = {
    _renderTree() {
        console.log("state");
    },
    _state: {
        ProfilePage: {
            postData: [
                {
                    post: "Hello react",
                    id: "1",
                    count: "24"
                },
                {
                    post: "I'm 18",
                    id: "2",
                    count: "11"
                }
            ],
            newPostText: "fixed"
        },
        MessagePage: {
            messagesData: [
                {id: "1",
                    message: "Hi"
                },
                {id: "2",
                    message: "How are you"
                },
                {id: "3",
                    message: "Yo"
                },
                {id: "4",
                    message: "Whats up"
                }
            ],
            DialogsData: [
                {id: "1",
                    name: "Rem"
                },
                {id: "2",
                    name: "Andrew"
                },
                {id: "3",
                    name: "Dima"
                },
                {id: "4",
                    name: "Vlad"
                }
            ]
        }
    },
    getState(){
        return(this._state)
    },
    addPost() {
        debugger;
        let newPost = {
            id: 5,
            count: 0,
            post: this._state.ProfilePage.newPostText
        }
        this._state.ProfilePage.postData.push(newPost);
        this._state.ProfilePage.newPostText = '';
        this._renderTree(this._state);
    },
    updatePostText(newText) {
        this._state.ProfilePage.newPostText = newText;
        this._renderTree(this._state);
    },
    subscibe(observer) {
        this._renderTree = observer;
    }
}


