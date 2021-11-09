import axios from "axios";
import { useState, useEffect } from "react";
/**
 *
 * Encontré muchas cosas que pueden hacer que esto no funcione,
 * pero la primera que tienes que arreglar es el tema de que en el useEffect tienes que llenar bien el estado.
 * Debes respetar lo que tienes en el estado, si inicializas con un objeto, debes matenerte con ese objeto y solo modificar sus atributos.
 */
const UsersList = () => {
  /**Cree un useState que calca el modelo que se va a mostrar */
  // Cuando haces un estado si debería ser
  // const [users, setUsers] = ..., y asegurate que si esta en plurar te refieres a una lista o alto asi
  const [users, setUser] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  /**Aqui hago el llamado de la peticion get, habia usado async await pero me daba error*/
  useEffect(() => {
    try {
      let response = axios.get("https://reqres.in/api/users");
      let data = response.json();
      // No esta bien, usar arreglo luego de haber inicializado con un objeto.
      setUser([
        ...data,
        {
          id: data.id,
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          avatar: data.avatar,
        },
      ]);
    } catch (error) {
      console.error("problem");
    }
  }, []);
  /**El segundo useEffect es para actualizaciones de la lista */
  /**
   * Esto no tienes que hacerlo, no es necesario actualizar la lista, ya el useEffect tiene
   * obtiene los datos del servicio, y luego no necesitas actualizar la lista mas.
   */
  useEffect(() => {
    let newState = users.map((e) => e);
    setUser(newState);
    console.log(newState);
  }, [users]);

  return (
    <div>
      <ul className="list-group">
        {users.map((user) => (
          /**He aqui el error
           * La funcion map no se me reconoce como*/
          <li className="list-group-item list-group-item-action" key={user._id}>
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
