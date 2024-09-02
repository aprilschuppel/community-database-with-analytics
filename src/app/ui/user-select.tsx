const users = [
    { id: 152, name: 'Monica13' },
    { id: 790, name: 'Gavin_Lakin-Kuvalis' },
    { id: 948, name: 'Ressie2' },
    { id: 1068, name: 'Alford.Dietrich56' },
    { id: 2403, name: 'Eldora41' },
    { id: 8115, name: 'Keon23'}
  ];
  
  interface SelectUserProps {
    selectedUser: number;
    setSelectedUser: (user: number) => void;
  }
  
export default function UserSelect({ selectedUser, setSelectedUser }: SelectUserProps) {
    return (
        <>
            Current user:
            <select className="rounded-md" value={selectedUser} onChange={e => setSelectedUser(parseInt(e.target.value))}>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
        </>
    );
}