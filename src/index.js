import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let postData = [
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
]
let DialogsData = [
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
let messagesData = [
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
]
ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} DialogsData={DialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
