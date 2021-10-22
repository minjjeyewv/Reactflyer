import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";

let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App postData={store.getState().ProfilePage.postData} DialogsData={store.getState().MessagePage.DialogsData}
                 messagesData={state.MessagePage.messagesData} addPost={store.addPost.bind(store)} newPostText={store.getState().ProfilePage.newPostText} updatePostText={store.updatePostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderTree(store.getState());
store.subscibe(renderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
