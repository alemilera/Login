
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/login';
import Users from './components/users/users';
import User from './components/users/components/user'
import Navbar from './components/navbar';

function App() {
  

  return (
   <div className = "App">
      <BrowserRouter>
        <Navbar email = "yrobertordaz@gmail.com"/>
        <div>
          <Route exact path = "/" component = {Login}/>
          <Route exact path = "/users" component = {Users}/>
          <Route exact path = "/user" component = {User}/>
        </div>
      </BrowserRouter>
   </div>
  );
}

export default App;
