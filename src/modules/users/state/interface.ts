export interface IUser {
  id: string
  firstName: string
  lastName: string
  age: number
}

export interface IUsers extends Record<IUser['id'], IUser> {}
