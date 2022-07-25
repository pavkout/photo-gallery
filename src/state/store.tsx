import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import Reducer from './reducer';
import { ContextType, IState } from '../types';
import { initialState } from './initialState';
import { initState } from './actions';
import { usePrevious } from '../hooks/usePrevious';

/**
 * React Context-based Global Store with a reducer
 **/
export function Store({ children }: { children: ReactNode }): ReactElement {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  // Get the previous value (was passed into hook on last render)
  const prevState: IState = usePrevious<IState>(state);

  useEffect(() => {
    // Get from local storage by key
    const savedState = window.localStorage.getItem('state');

    if (savedState && JSON.parse(savedState)) {
      // Checking if there already is a state in localstorage, if yes, update the current state with the stored one
      dispatch(initState(JSON.parse(savedState)));
    }
  }, []);

  useEffect(() => {
    if (state !== prevState) {
      // Create and/or set a new localstorage variable called "state"
      localStorage.setItem('state', JSON.stringify(state));
    }
  }, [state, prevState]);

  return (
    <AlbumContext.Provider value={contextValue}>
      {children}
    </AlbumContext.Provider>
  );
}

export const AlbumContext = createContext({} as ContextType);

export function useAppContext() {
  return useContext(AlbumContext);
}
