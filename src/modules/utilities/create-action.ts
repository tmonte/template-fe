export interface BaseAction {
  type: string
}

export interface Action<Payload> extends BaseAction {
  payload: Payload
  error?: boolean
}

export interface ActionMeta<Payload, Meta> extends Action<Payload> {
  meta: Meta
}

export type ActionFunction0<P> = () => P
export type ActionFunction1<T1, R> = (t1: T1) => R
export type ActionFunction2<T1, T2, R> = (t1: T1, t2: T2) => R
export type ActionFunction3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R
export type ActionFunction4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R
export type ActionFunctionAny<R> = (...args: any[]) => R

const identity = <T>(p: T) => p

export function createAction(actionType: string): ActionFunction0<Action<unknown>>
export function createAction<Payload>(
  actionType: string,
  payloadCreator: ActionFunction0<Payload>
): ActionFunction0<Action<Payload>>
export function createAction<Payload, Arg1>(
  actionType: string,
  payloadCreator: ActionFunction1<Arg1, Payload>
): ActionFunction1<Arg1, Action<Payload>>
export function createAction<Payload, Arg1, Arg2>(
  actionType: string,
  payloadCreator: ActionFunction2<Arg1, Arg2, Payload>
): ActionFunction2<Arg1, Arg2, Action<Payload>>
export function createAction<Payload, Arg1, Arg2, Arg3>(
  actionType: string,
  payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>
): ActionFunction3<Arg1, Arg2, Arg3, Action<Payload>>
export function createAction<Payload, Arg1, Arg2, Arg3, Arg4>(
  actionType: string,
  payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>
): ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>
export function createAction<Payload>(actionType: string): ActionFunction1<Payload, Action<Payload>>
export function createAction<Meta>(
  actionType: string,
  payloadCreator: undefined,
  metaCreator: ActionFunctionAny<Meta>
): ActionFunctionAny<ActionMeta<any, Meta>>
export function createAction<Payload, Meta>(
  actionType: string,
  payloadCreator: ActionFunctionAny<Payload>,
  metaCreator: ActionFunctionAny<Meta>
): ActionFunctionAny<ActionMeta<Payload, Meta>>
export function createAction<Payload, Meta, Arg1>(
  actionType: string,
  payloadCreator: ActionFunction1<Arg1, Payload>,
  metaCreator: ActionFunction1<Arg1, Meta>
): ActionFunction1<Arg1, ActionMeta<Payload, Meta>>
export function createAction<Payload, Meta, Arg1, Arg2>(
  actionType: string,
  payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
  metaCreator: ActionFunction2<Arg1, Arg2, Meta>
): ActionFunction2<Arg1, Arg2, ActionMeta<Payload, Meta>>
export function createAction<Payload, Meta, Arg1, Arg2, Arg3>(
  actionType: string,
  payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
  metaCreator: ActionFunction3<Arg1, Arg2, Arg3, Meta>
): ActionFunction3<Arg1, Arg2, Arg3, ActionMeta<Payload, Meta>>
export function createAction<Payload, Meta, Arg1, Arg2, Arg3, Arg4>(
  actionType: string,
  payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
  metaCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Meta>
): ActionFunction4<Arg1, Arg2, Arg3, Arg4, ActionMeta<Payload, Meta>>
export function createAction(
  type: string,
  payloadCreator: (...p: any[]) => any | null | undefined = identity,
  metaCreator: any = identity
) {
  const hasMeta = typeof metaCreator === 'function'
  const finalPayloadCreator: (...args: any[]) => any =
    payloadCreator === identity
      ? identity
      : (head: any, ...args: any[]) =>
          head instanceof Error ? head : payloadCreator(head, ...args)
  const typeString = type.toString()

  const actionCreator = (...args: any[]) => {
    const payload = finalPayloadCreator(...args)
    const action: any = {type}

    if (payload instanceof Error) {
      action.error = true
    }

    if (payload !== undefined) {
      action.payload = payload
    }

    if (hasMeta) {
      action.meta = metaCreator(...args)
    }

    return action
  }

  actionCreator.toString = () => typeString

  return actionCreator
}
