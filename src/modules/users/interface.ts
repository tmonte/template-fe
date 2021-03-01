import {Effect} from './effect'
import {State as UsersState} from './state'

export type State = UsersState.State

export interface Module {
  effect: Effect
  state: UsersState.Module
}
