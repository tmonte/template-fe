import {state} from '../state'
import {add} from './add'
import {Module} from './interface'

export const effect: Module = {
  add: {
    command: add.command,
    saga: add.saga(state.users)
  }
}
