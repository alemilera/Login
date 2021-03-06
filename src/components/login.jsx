import {useState} from 'react';
import {useHistory} from 'react-router-dom'


const Login = () => {
  /*Creando estados con useState */
    const [user, setUser] = useState({
      email: '',
      password: '',
    });

    let history = useHistory();


/**Manejando estados de cada input de forma independiente */
    const handleChangeEmail = (e)=> {
         setUser({...user,email: e.target.value})
      }
    
     const handleChangePassword = (e) => {
        setUser({...user, password: e.target.value})
     }


     const email = 'yrobertordaz@gmail.com';
     const password = 'User*123';
/**Funcion de redireccionamiento si el email y el password coinciden */
    const onClick = (e) =>{
        
       if(user.email === email && user.password === password)
         history.push('/users')
                 
       else
         alert("Usuario y/o contraseña son incorrectas")  
    }

    const handleSubmit = (e) =>{
       e.preventDefault();
    }

    return(
        <div className="container">
        <div className = "App">
          <form className = "form-control" onSubmit = {handleSubmit}>
            <div>
              
              <input
                onChange = {(value)=>handleChangeEmail(value)} 
                id = "email"
                type = "text" 
                className = "form-group" 
                placeholder = "email" 
                name = "email"
                value = {user.email}
                />
            </div>
            <div>
              
              <input 
                onChange = {(value)=>handleChangePassword(value)}
                id = "password"
                type = "password" 
                className = "form-group" 
                placeholder = "password" 
                name = "password"
                value = {user.password}/>
            </div>
            <button className = "btn btn-primary" onClick = {onClick}>Login</button>
          </form>
        </div>
      </div>   
    );
}

export default Login;