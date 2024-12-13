import React, { useState, useEffect } from 'react';

function Matching() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/users/')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const filteredUsers = users.filter(user =>
        user.skill.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    return (
        <div>
            <h2>Matching Automático</h2>
            <input
                type="text"
                placeholder="Buscar habilidad..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id} onClick={() => handleSelectUser(user)}>
                        {user.name} - {user.city} - {user.skill}
                    </li>
                ))}
            </ul>
            {selectedUser && (
                <div>
                    <h3>Has seleccionado a {selectedUser.name}</h3>
                    <p>Habilidad: {selectedUser.skill}</p>
                    <p>Ciudad: {selectedUser.city}</p>
                </div>
            )}
        </div>
    );
}

export default Matching;
