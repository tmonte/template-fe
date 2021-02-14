export interface IUser {
  id: string
  firstName: string
  lastName: string
  age: number
}

export interface IProps {
  users: IUser[]
}

export function List({users}: IProps) {
  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={3}>No users found.</td>
            </tr>
          )}
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td> {user.lastName}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
