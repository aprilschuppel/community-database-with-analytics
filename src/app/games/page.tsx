"use client";

import BoardGameTable from '../ui/table';
import { useState } from 'react';
import UserSelect from '../ui/user-select';

export default function Page() {
  const [selectedUser, setSelectedUser] = useState(152);
  console.log(selectedUser);

  return (
    <main>
      <UserSelect selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <BoardGameTable selectedUserId={selectedUser} />
    </main>
  );
}