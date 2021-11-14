
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/login';
import Users from './components/users/users';

function App() {
 

  return (
   <div className = "App">
      <BrowserRouter>
        <div>
          <Route exact path = "/" component = {Login}/>
          <Route exact path = "/users" component = {Users}/>
        </div>
      </BrowserRouter>
   </div>
  );
}

export default App;
