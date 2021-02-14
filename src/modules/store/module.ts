import createSagaMiddleware, {SagaIterator} from 'redux-saga'
import {compose, applyMiddleware, createStore as reduxCreateStore, Reducer} from 'redux'
import {OptiqsAction, updateState} from '@optiqs/optiqs'
import {reducer} from '@optiqs/optiqs'
import {all} from 'redux-saga/effects'
import {IState} from 'modules/state'
import {Users} from 'modules/users'

export const create = <S>(
  reducer: Reducer<S, OptiqsAction<S>>,
  sagas: () => SagaIterator,
  initialState?: S
) => {
  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

  const store = reduxCreateStore<S, OptiqsAction<S>, void, void>(reducer, enhancer)

  sagaMiddleware.setContext({dispatch: store.dispatch})
  sagaMiddleware.run(sagas)

  initialState && store.dispatch(updateState<S>(() => initialState))

  return store
}

function* sagas() {
  yield all([...Object.values(Users.Effect.sagas)])
}

const initialState: IState.IState = {
  users: Users.State.initial
}

export const instance = create(reducer, sagas, initialState)
