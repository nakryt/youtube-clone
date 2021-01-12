import firebase from "firebase";

export const initialState = {
  user: null as firebase.User | null,
  accessToken: null as null | string,
  refreshToken: null as null | string,
};

export type State = typeof initialState;

export type Action =
  | { type: "SET_USER"; payload: firebase.User | null }
  | { type: "SET_ACCESS_TOKEN"; payload: string | null };

export const setUser = (payload: firebase.User | null) => ({
  type: "SET_USER" as const,
  payload,
});
export const setAccessToken = (payload: string | null) => ({
  type: "SET_ACCESS_TOKEN" as const,
  payload,
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
