import React from "react";

const ErrorMessage = (({error}) => (error? <strong>{error}</strong> : null));
const LoadingMessage = (({loading}) => (loading? <strong>{loading}</strong> : null) );

export default  function UserList  ({error,loading,users}) {
    return (
        <section>
       <ErrorMessage error={error}/>
       <LoadingMessage loading = {loading}/> 
       <ul>
        {users.map((user)=> (
            <li key={user.id}>{user.name}</li>
        )) }
       </ul>
    </section>
    )
}