import {reducer} from '@optiqs/optiqs'
import {all} from 'redux-saga/effects'
import {users} from 'modules/users'
import {create} from './create'

function* sagas() {
  yield all([users.effect.add.saga])
}

const initialState = {
  users: users.state.initial
}

export const instance = create(reducer, sagas as any, initialState)
