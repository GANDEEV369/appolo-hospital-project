import React, { useState } from 'react';
import axios from 'axios';

const UpdatePassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put('http://localhost:3000/updatepassword', {
                mail: email,
                password: password,
                newpassword: newPassword
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error updating password:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>
            <label>
                Current Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </label>
            <label>
                New Password:
                <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
            </label>
            <button type="submit">Update Password</button>
        </form>
    );
};

export default UpdatePassword;
