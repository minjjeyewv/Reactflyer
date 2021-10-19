import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
            <Route path="/Dialogs" render={() => <Dialogs DialogsData={props.DialogsData} messagesData={props.messagesData}/>} />
            <Route path="/Profile" render={() => <Profile postData={props.postData} />} />
            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;
