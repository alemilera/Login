const login = () => {
 /* La idea es poder leer el valor de los input para hacer las validaciones pertinentes.
 El tema es que no se que error puedo tener que no me quiere leer el valor del primer input. Necesito que revises la logica y 
 y me dias si esta bien*/
  console.log(document.getElementById("user").value)
  debugger;
    const onClick = () =>{
       
        if(document.getElementById("user").value=== 'yrobertordaz@gmail.com' && document.getElementById("password").value === 'User*123')
        {
          this.props.history.Push('/users')
        }
        else{
          alert('Usuario y/o contraseña no son correctos')
        }
      }
    return(
        <div className="container">
        <div className = "App">
          <form className = "form-control" name = "formName">
            <div>
              
              <input 
                id = "user"
                type = "text" 
                className = "form-group" 
                placeholder = "email" 
                name = "user"
                value = "Alejandro"
                />
            </div>
            <div>
              
              <input 
                id = "password"
                type = "password" 
                className = "form-group" 
                placeholder = "password" 
                name = "password"/>
            </div>
            <button className = "btn btn-primary" onClick = {()=> onClick}>Login</button>
          </form>
        </div>
      </div>   
    );
}

export default login;