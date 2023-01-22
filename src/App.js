import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import PostPage from "pages/PostPage";
import {Switch, Route} from 'react-router-dom'

function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/post" component={PostPage} />
            <Route exact path="/user" component={RegisterPage} />
            <Route exact path="/new-post" component={RegisterPage} />
        </Switch>
    );
}

export default App;
