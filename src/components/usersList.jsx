import axios from 'axios';
import {useState, useEffect} from 'react';

const UsersList = () =>{
    /**Cree un useState que calca el modelo que se va a mostrar */
    const [users, setUser] = useState(
        {
          id: '',
          email: '',
          first_name: '',
          last_name: '',
          avatar: ''
        }
    );

    /**Aqui hago el llamado de la peticion get, habia usado async await pero me daba error*/
    useEffect(()=> {
        try{
            let response = axios.get('https://reqres.in/api/users');
            let data = response.json();
            setUser(
                [...data, 
                    {id: data.id, 
                     email: data.email, 
                     first_name: data.first_name, 
                     last_name: data.last_name, 
                     avatar: data.avatar}
                ]);
        }
        catch(error){
            console.error('problem')
        }
    }, []);
    /**El segundo useEffect es para actualizaciones de la lista */
    useEffect(() =>{
        let newState = users.map((e) => e);
        setUser(newState);
        console.log(newState);
    }, [users])
    
        return(
            <div>
              <ul className = "list-group">
                {users.map(user => 
                  /**He aqui el error
                   * La funcion map no se me reconoce como*/
                    <li className = "list-group-item list-group-item-action" key = {user._id}>
                        {user.email}    
                   </li>)}
               </ul> 
            </div>
        );
    
}

export default UsersList;

