import {useState} from 'react';

const Login = () => {
  /*Creando estados con useState */
    const [user, setUser] = useState({
      email: '',
      password: '',
    });


/**Manejando estados de cada input de forma independiente */
    const handleChangeEmail = (e)=> {
         setUser(...user,{email: e.target.value})
      }
    
     const handleChangePassword = (e) => {
        setUser(...user,{password: e.target.value})
     }



/**Funcion de redireccionamiento si el email y el password coinciden */
    const onClick = (e) =>{
       if(user.email === "yrobertordaz@gmail.com" && user.password === "User*123")
         this.props.history.push('/users')
       else
         alert("Usuario y/o contraseña son incorrectas")  
    }

    const handleSubmit = (e) =>{
       e.preventDefault();
    }

    return(
        <div className="container">
        <div className = "App">
          <form className = "form-control" onSubmit = {(e)=>handleSubmit}>
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
            <button className = "btn btn-primary" onClick = {()=> onClick}>Login</button>
          </form>
        </div>
      </div>   
    );
}

export default Login;