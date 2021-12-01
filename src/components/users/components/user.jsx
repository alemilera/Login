import {useEffect, useState} from 'react';
import UserService from '../../../services/user.service';
import '../../../styles/user.css';

const User = () =>{
    const [user, setUser] = useState({
        data: [],
    });

    const [users, setUsers] = useState({
        data:[]
    })
    const [id, setId] = useState(1);
    
    

    useEffect(async ()=>{
        let array =await UserService.getUsers();
        let dat = await UserService.getUser(id);
        setUsers({...users, data: array.data})
        setUser({data: dat.data.data})
        
    },[]);

    const handleNext = async() =>{
        
        
        if(id <= users.data.total)
        {
           let dat = await UserService.getUser(id);
           setUser({...user,data: dat.data.data})
           console.log(dat);
           setId(id+1);
        }
        else{
            alert("not there is more elements that show")
        }
    }

    const handlePrevious = async() =>{
        if(id == 0)
            alert("not there is more elements that show")
        else if(id <= users.data.total){
                setId(id-1); 
                let dat = await UserService.getUser(id);
                setUser({...user,data: dat.data.data})
                console.log(dat);
             }
            
        }
    

    return(
        <div className = "container-box">
             <div className = "Left">
                <button  
                    className = "btn btn-primary"
                    onClick = {handlePrevious}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
                        </svg>
                </button>  
             </div>    
             

             <div id = "Element">
                    <div>
                        <img className="Avatar" alt="Responsive image" src={user.data.avatar} />
                    </div>
                    <div className = "label">
                        <h5>Email: </h5>
                        <h5>{user.data.email}</h5>
                    </div>

                    <div className = "label">
                        <h5>Firstname: </h5>
                        <h5>{user.data.first_name}</h5>
                    </div>
                
                    <div className = "label">
                        <h5>Lastname: </h5>
                        <h5>{user.data.last_name}</h5>
                    </div>
             </div> 

             
                <div className = "Rigth">
                    <button
                        className = "btn btn-primary" 
                        onClick = {handleNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                            </svg>
                    </button>
                </div>
                
              
        </div>
    );
}

export default User;