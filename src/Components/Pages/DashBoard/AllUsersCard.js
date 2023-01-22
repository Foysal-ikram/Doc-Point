import React from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const AllUsersCard = ({ user ,i , refetch}) => {
    console.log(user)

    const makeAdmin=id=>{
        console.log(id)
       
        fetch(`https://doctors-portal-server-ochre.vercel.app/admin?id=${id}` , {
            method : 'PUT' ,
            
        })
        .then(res=>res.json())
        .then(res=>{

        refetch()
        Swal.fire(
            'Set as Admin',
            'Succesful',
            'success'
          )
    
    })  
    }
   
    const removeAdmin=id=>{
               
        fetch(`https://doctors-portal-server-ochre.vercel.app/removeadmin?id=${id}` , {
            method : 'PUT' ,
            
        })
        .then(res=>res.json())
        .then(res=>{

        refetch()
        Swal.fire(
            'Removed Admin',
            'Succesful',
            'success'
          )
    
    }) 

    }

    return (
        <tr>
            <th>{i}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{ user?.role !== 'admin' && <button onClick= {() => makeAdmin(user._id)} className='btn btn-sm btn-success w-32' > Make Admin</button>}
                {user?.role == 'admin' && <button  onClick={()=>removeAdmin(user._id)}  className='btn btn-sm btn-error w-32'>Remove Admin</button> }
            </td>
        </tr>

    );
};

export default AllUsersCard;