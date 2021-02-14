import {State} from 'modules/state'
import {recordArrayIso, recordOptional} from 'modules/utilities/collection-optics'
import {IUsers, IUser} from './interface'

export const initial: IUsers = {}

const usersAccessor = State.get('users')

export const users = usersAccessor.composeIso(recordArrayIso<IUser>())

export function user(id: IUser['id']) {
  return usersAccessor.composeOptional(recordOptional(id))
}
