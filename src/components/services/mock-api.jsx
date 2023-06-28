import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6488234f0e2469c038fd0ab2.mockapi.io/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>User: {user.user}</p>
            <p>Followers: {user.followers}</p>
            <p>Tweets: {user.tweets}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
