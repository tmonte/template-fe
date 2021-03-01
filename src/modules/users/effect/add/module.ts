import {updateState} from '@optiqs/optiqs'
import * as array from 'fp-ts/lib/Array'
import {createAction} from 'modules/effect'
import {put, takeLatest} from 'redux-saga/effects'
import {State} from '../../state'
import {Add, Module} from './interface'

export const add: Module = {
  command: createAction<State.User>('USER/ADD'),
  saga: function* watchAdd(users: State.UsersAccessor) {
    yield takeLatest(
      add.command.toString(),
      function* ({payload: user}: ReturnType<Add>) {
        yield put(updateState(users.modify(array.cons(user))))
      }
    )
  }
}
