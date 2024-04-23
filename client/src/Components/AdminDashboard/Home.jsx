import React, { useState, useEffect } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import axios from 'axios';
import './Home.css'; 

function Home({ users }) {
    const [fetchedUsers, setFetchedUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [editableUser, setEditableUser] = useState(null);

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:8000/api/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            setFetchedUsers(data);
        } catch (error) {
            console.error("Error:", error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleEdit = (user) => {
        // Set the user to be edited
        setEditableUser(user);
    };

    const handleSave = async () => {
      try {
        const response = await axios.put(
            `http://127.0.0.1:8000/api/users/${editableUser.id}`,
            editableUser,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.status !== 200) {
            throw new Error('Failed to update user');
        }

        // Refresh the user list after successful update
        fetchUsers();
        setEditableUser(null); // Reset editableUser after saving

        alert('User updated successfully');
    } catch (error) {
        console.error("Error:", error.message);
    }
};

    const handleDelete = async (userId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) {
            return; // If the user cancels, do nothing
        }

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/users/${userId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            // Refresh the user list after successful deletion
            alert('User Deleted successfully');
            fetchUsers();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableUser({ ...editableUser, [name]: value });
    };

    return (
        <main className='main-container'>
            <div className='main-cards'>
                <div className='card' onClick={fetchUsers}>
                    <div className='card-inner'>
                        <h3>Users</h3>
                        <BsPeopleFill className='card_icon'/>
                    </div>
                    <h1>{isLoading ? 'Loading...' : fetchedUsers.length}</h1>
                </div>
            </div>

            <div className='user-list'>
                <h2>User List</h2>
                <ul className="user-details">
                    {fetchedUsers.map(user => (
                        <li key={user.id} className="user-item">
                            <div className="user-info">
                                <strong>ID:</strong>{user.id}<br />
                                {editableUser && editableUser.id === user.id ? (
                                    <>
                                        <strong>First Name:</strong><input type="text" name="firstName" value={editableUser.firstName || ''} onChange={handleChange} className="user-field" /><br />
                                        <strong>Last Name:</strong><input type="text" name="lastName" value={editableUser.lastName || ''} onChange={handleChange} className="user-field" /><br />
                                        <strong>Email:</strong><input type="text" name="email" value={editableUser.email || ''} onChange={handleChange} className="user-field" /><br />
                                        <strong>Phone:</strong><input type="text" name="phone" value={editableUser.phone || ''} onChange={handleChange} className="user-field" /><br />
                                        <strong>Message:</strong><input type="text" name="message" value={editableUser.message || ''} onChange={handleChange} className="user-field" /><br />
                                        <button onClick={handleSave} className="btn btn-success">Save</button>
                                        <button onClick={() => setEditableUser(null)} className="btn btn-secondary">Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <strong>First Name:</strong>{user.firstName}<br />
                                        <strong>Last Name:</strong>{user.lastName}<br />
                                        <strong>Email:</strong>{user.email}<br />
                                        <strong>Phone:</strong>{user.phone}<br />
                                        <strong>Message:</strong>{user.message}<br />
                                        <button onClick={() => handleEdit(user)} className="btn btn-primary">Edit</button>
                                        <button onClick={() => handleDelete(user.id)} className="btn btn-danger">Delete</button>
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Home;
