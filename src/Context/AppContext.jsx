import { createContext, useReducer } from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {};

  const reducerFun = (state, action) => {
    switch (action.type) {
      case "DELETE_ITEM":
        return {
          ...state
        };

      default:
        return state;
    }
  };

  const [appState, dispatch] = useReducer(reducerFun, initialState);
  console.log(appState);
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
