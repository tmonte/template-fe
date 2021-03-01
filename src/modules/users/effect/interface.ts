import {BuildEffect} from 'modules/effect'
import {Add} from './add'

export interface Module {
  add: BuildEffect<Add>
}
