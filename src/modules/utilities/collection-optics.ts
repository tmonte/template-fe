import {Optional} from 'monocle-ts'
import {Iso} from 'monocle-ts'
import * as option from 'fp-ts/lib/Option'

export interface IIdentifiable {
  id: string
}

function recordToArray<T extends IIdentifiable>(
  r: Record<T['id'], T>
): Array<T> {
  return Object.values(r)
}

function arrayToRecord<T extends IIdentifiable>(
  a: Array<T>
): Record<T['id'], T> {
  return a.reduce((r, v) => ({...r, [v.id]: v}), {} as Record<T['id'], T>)
}

export function recordArrayIso<T extends IIdentifiable>() {
  return new Iso<Record<T['id'], T>, Array<T>>(recordToArray, arrayToRecord)
}

export const recordOptional = <T extends IIdentifiable>(id: T['id']) =>
  new Optional(
    (s: Record<T['id'], T>) => (s[id] ? option.some(s[id]) : option.none),
    (a: T) => (r: Record<T['id'], T>) => ({...r, [a.id]: a})
  )
