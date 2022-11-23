import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loader/Loading';
import AllUsersCard from './AllUsersCard';

const AllUser = () => {

    const { data: users=[] , isLoading , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users')
            .then(res => res.json())
            

    })
     console.log(users)

     if(isLoading){
        return <Loading></Loading>
     }

    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
       
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((user , i)=><AllUsersCard
            key={user._id}
            i={i+1}
            user={user}
            refetch={refetch}
            ></AllUsersCard>)
          }
          </tbody>
        </table>
      </div>
    );
};

export default AllUser;