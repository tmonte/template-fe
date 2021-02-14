import {reducer} from '@optiqs/optiqs'
import {all} from 'redux-saga/effects'
import {IState} from 'modules/state'
import {Users} from 'modules/users'
import {create} from './create'

function* sagas() {
  yield all([...Object.values(Users.Effect.sagas)])
}

const initialState: IState.IState = {
  users: Users.State.initial
}

export const instance = create(reducer, sagas, initialState)
