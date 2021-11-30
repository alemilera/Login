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
             <div id = "Element">
                <button className = "Left"
                    className = "btn btn-primary" 
                    onClick = {handlePrevious}>
                        <span className="glyphicon glyphicon-arrow-left">Previous</span>
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

             <div id = "Element">
                <button
                    className = "btn btn-primary" 
                    onClick = {handleNext}>
                        <span className="glyphicon glyphicon-arrow-right">Next</span>
                </button>
             </div>  
              
        </div>
    );
}

export default User;