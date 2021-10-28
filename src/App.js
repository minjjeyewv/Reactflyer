import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
            <Route path="/Dialogs" render={() => <DialogsContainer store={props.store}/>} />
            <Route path="/Profile" render={() => <Profile postData={props.postData} store={props.store} newPostText={props.newPostText} />} />
            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;
