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
      {users.map(user => (
        <div key={user.id}>
          <div>{user.firstName} {user.lastName}</div>
          <div>{user.age}</div>
        </div>
      ))}
    </div>
  )
}
