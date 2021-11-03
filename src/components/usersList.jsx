import axios from 'axios';
import {Component} from 'react';

class usersList extends Component{
    state = {
        users:[]
    }

   async componentDidMount(){
       const res = await axios.get('https://reqres.in/api/users');
       this.setState({users: res.data})
       console.log(this.state.users);
       
    }
    
    render(){
        
        return(
            <div>
              <ul className = "list-group">
                   {this.state.users.map(user => 
                   /**La funcion map no se me reconoce como TAL */
                    <li className = "list-group-item list-group-item-action" key = {user._id}>
                        {user.email}    
                    </li>)}
               </ul> 
            </div>
        );
    }
}

export default usersList;