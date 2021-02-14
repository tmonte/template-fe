import {updateState} from '@optiqs/optiqs'
import * as array from 'fp-ts/lib/Array'
import {Action, createAction} from 'modules/utilities'
import {put, takeLatest} from 'redux-saga/effects'
import {IState, State} from '../state'

export const add = createAction<IState.IUser>('USER/ADD')
export interface IAdd {
  (user: IState.IUser): Action<IState.IUser>
}

export const addSaga = takeLatest(add.toString(), function* ({payload: user}: ReturnType<IAdd>) {
  yield put(updateState(State.users.modify(array.cons(user))))
})
