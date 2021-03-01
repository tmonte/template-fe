import {State} from '../../state'
import {Action} from 'modules/effect'
import {ForkEffect} from 'redux-saga/effects'
import {Effect} from 'modules/effect'

export type Add = (user: State.User) => Action<State.User>

export type AddSaga = (
  user: State.UsersAccessor
) => Generator<ForkEffect<never>, void, unknown>

export interface Module extends Effect {
  command: Add
  saga: AddSaga
}
