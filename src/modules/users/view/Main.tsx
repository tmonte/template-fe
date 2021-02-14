import {Dispatch, Select} from 'modules/utilities'
import {Effect} from '../effect'
import {State} from '../state'
import {Add} from './Add'
import {List} from './List'

export function Main() {
  return (
    <div>
      <List users={Select(State.users)} />
      <Add onAdd={Dispatch(Effect.add)} />
    </div>
  )
}
