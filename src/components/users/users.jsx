
import { useState, useEffect } from "react";
import UserService from "../../services/user.service";

const Users = () => {
 
  const [users, setUsers] = useState({
    data:[], 
    page: 1
  });

  
  useEffect(async () => {
      let user = await UserService.getUsers();
      setUsers({...users, data: user.data.data, page: user.data.page})
      console.log(user)
    }, []);

    //en esta funcion lo que intento es mostrar la otra vista pero hay algo mal
  const handlePage = async() => {
    let user = await UserService.getUsersTest(users.page)
    if(users.page <= user.data.total_pages)
    {
      user.data.page +=1;
      setUsers({data: user.data.data, page: user.data.page})
      
    }
    else{
      alert('No hay mas datos por mostrar')
    }
  }

  
  
        
   
return (
    <div className = "container">
      <div className = "row">
        <div className = "col">
          <ul>
            {
              users.data.map((dat) => {
                 return (<li key = {dat.id}
                  >
                    {dat.email}
                  </li>)})
            }
          </ul>
        </div>
        <div>
          <button 
            className = "btn btn-primary" 
            onClick = {handlePage}>
              Pagina {users.page}
            </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
