import React, { useState } from 'react';


function App() {

const [users, setUsers] = useState(['Alice', 'Bob', 'Charlie']);

const [newUser, setNewUser] = useState('');


const addUser = () => {

setUsers([...users, newUser]);

setNewUser('');

};


return (

<div>

<h1>Lista de Usuários</h1>

<input

type="text"

value={newUser}

onChange={(e) => setNewUser(e.target.value)}

placeholder="Adicionar usuário"

/>

<button onClick={addUser}>Adicionar</button>


<ul>

{users.map((user, index) => (

<li key={index}>{user}</li>

))}

</ul>

</div>

);

}


export default App;
