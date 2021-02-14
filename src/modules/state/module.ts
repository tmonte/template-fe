import {Lens} from 'monocle-ts'
import {IState} from './interface'

export const get = Lens.fromProp<IState>()
