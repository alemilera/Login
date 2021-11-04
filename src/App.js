
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/login';
import usersList from './components/usersList';

function App() {
  /** Problematica del dia:
   * En el login, especificamente en el frontend lo puedo escribir en el input
   */

  return (
   <div className = "App">
      <BrowserRouter>
        <div>
          <Route exact path = "/" component = {Login}/>
          <Route exact path = "/users" component = {usersList}/>
        </div>
      </BrowserRouter>
   </div>
  );
}

export default App;
