import {ForkEffect} from 'redux-saga/effects'
import {Action} from './create-action'

export type Command<TPayload> = (...params: any[]) => Action<TPayload>

export interface Effect {
  command: Command<unknown>
  saga: (...deps: any[]) => Generator<ForkEffect<never>, void, unknown>
}

export interface BuildEffect<TEffect extends Effect> {
  command: TEffect['command']
  saga: ReturnType<TEffect['saga']>
}
