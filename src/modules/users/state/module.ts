import {
  recordArrayIso,
  recordOptional
} from 'modules/collection'
import {Lens} from 'monocle-ts'
import {User, Module, MainState} from './interface'

const access = Lens.fromProp<MainState>()

export const state: Module = {
  initial: {},
  users: access('users').composeIso(recordArrayIso<User>()),
  user: (id: User['id']) => access('users').composeOptional(recordOptional(id))
}
