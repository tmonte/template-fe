import {shallowEqual, useDispatch, useSelector} from 'react-redux'

export function Select<S, A>(accessor: {get: (s: S) => A}) {
  return useSelector(accessor.get, shallowEqual)
}

export function Dispatch<F extends (...args: any[]) => any>(fn: F) {
  const dispatch = useDispatch()
  return (...p: Parameters<F>) => {
    dispatch(fn(...p))
  }
}
