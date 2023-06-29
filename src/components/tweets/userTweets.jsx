import React, { useState, useEffect } from 'react';

const UserCard = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(user.followers);

  useEffect(() => {
    // Перевіряємо, чи користувач був уже поставлений у стан Following
    const following = localStorage.getItem(`following_${user.id}`);
    setIsFollowing(following === 'true');
  }, [user.id]);

  const handleFollow = () => {
    if (isFollowing) {
      // Якщо користувач вже перебуває у стані Following, змінюємо на початковий стан
      localStorage.setItem(`following_${user.id}`, 'false');
      setIsFollowing(false);
      setFollowerCount(prevCount => prevCount - 1);
    } else {
      // Якщо користувач не перебуває у стані Following, змінюємо на стан Following
      localStorage.setItem(`following_${user.id}`, 'true');
      setIsFollowing(true);
      setFollowerCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div className="user-card">
      <div className="user-info">
        <div className="avatar">{user.avatar}</div>
        <div className="username">{user.user}</div>
      </div>
      <div className="user-actions">
        <button onClick={handleFollow} className={isFollowing ? 'following' : ''}>
          {isFollowing ? 'Following' : 'Follow'}
        </button>
        <div className="follower-count">{followerCount} followers</div>
      </div>
    </div>
  );
};

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Отримуємо дані користувачів з бекенду
    fetch('https://6488234f0e2469c038fd0ab2.mockapi.io/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
