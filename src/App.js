
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/login';
import usersList from './components/usersList';

function App() {
  /** Intente hacer trabajos con el hook pero en el caso del componente del listado tengo que usar componentDidMount,
   * lo que pretendo es hacerlo con el metodo conocido y luego usar useEffect
   */

  /**Primer problema en el componente Login*/

  /**Segundo problema en el componente usersList */

  /**Llevo toda la mañana intentando. ya una vez que acudo a ti es porque ya se me agotaron las ideas */

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
