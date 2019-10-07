import React from "react";

type ContextProps = {
  coolData: {
    sweet: string[],
    rad: string[],
  }
};

const initData = {
  coolData: {
    sweet: [],
    rad: [],
  }
}

interface Action<T, P> {
  type: T;
  payload: P;
}

type Actions =
  | Action<"UPDATE_COOL_DATA", {
    type: 'sweet'|'rad';
    data: string[];
  }>

// Context
const State = React.createContext<Partial<ContextProps>>(initData);
const Dispatch = React.createContext<React.Dispatch<Actions>>(() => {});

// Reducer
const reducer = (state: ContextProps, action: Actions) => {
  switch (action.type) {
    case "UPDATE_COOL_DATA":
      return {
        ...state,
        coolData: {
          ...state.coolData,
          [action.payload.type]: action.payload.data
        }
      };
    default:
      return state;
  }
};

// Provider
const Provider = ({ children }:{ children: JSX.Element }) => {
  const [state, dispatch] = React.useReducer(reducer, initData);

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

export const useStore = (): [
  Partial<ContextProps>,
  React.Dispatch<Actions>
] => {
  const dispatch = React.useContext<React.Dispatch<Actions>>(Store.Dispatch);
  const state = React.useContext<Partial<ContextProps>>(Store.State);
  return [state, dispatch];
};

export const Store = {
  State,
  Dispatch,
  Provider
};
