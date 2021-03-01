import {Module} from './interface'
import {effect} from './effect'
import {state} from './state'

export const users: Module = {
  effect,
  state
}
