import {Lens, Optional} from 'monocle-ts'

export interface User {
  id: string
  firstName: string
  lastName: string
  age: number
}

export type State = Record<User['id'], User>

export interface MainState {
  users: State
}

export type UsersAccessor = Lens<MainState, User[]>

export type UserAccessor = (id: User['id']) => Optional<MainState, User>

export interface Module {
  initial: State
  users: UsersAccessor
  user: UserAccessor
}
