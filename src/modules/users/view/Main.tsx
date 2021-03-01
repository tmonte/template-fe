import {Dispatch, Select} from 'modules/view'
import {effect} from '../effect'
import {state} from '../state'
import {Add} from './Add'
import {List} from './List'

export function Main() {
  return (
    <div>
      <List users={Select(state.users)} />
      <Add onAdd={Dispatch(effect.add.command)} />
    </div>
  )
}
