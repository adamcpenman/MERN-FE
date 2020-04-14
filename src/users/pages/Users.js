import React from 'react';

import UserList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'adam penman',
      image:
        'https://avatars0.githubusercontent.com/u/50333588?s=460&u=23186af7f5f0c0ce5595b0b1e3f6e4ae536d4808&v=4',
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
