import { AppThunk } from "../store";

// import userAPI from "../api/userAPI";
// import {} from "./userSlice";

export const getToken = (): AppThunk => async (dispatch) => {
  try {
  } catch (e) {}
};

// export const register = (
//   name: string,
//   email: string,
//   phone: string,
//   position: number,
//   image: File
// ): AppThunk => async (dispatch, getState) => {
//   try {
//     dispatch(setRegistrationSuccess(false));
//     const token = getState().users.token;
//     const isValidToken =
//       token.value && token.time + token.timeOfExist - Date.now() > 0;
//     if (!isValidToken) {
//       dispatch(getToken());
//       dispatch(register(name, email, phone, position, image));
//     } else {
//       const response = await usersAPI.registration(
//         name,
//         email,
//         phone,
//         position,
//         image,
//         token.value
//       );
//       if (typeof response === "string") {
//         dispatch(setRegistrationMessage(response));
//       } else if (response.success) {
//         dispatch(updateUsers());
//         dispatch(setRegistrationSuccess(true));
//         response.message && dispatch(setRegistrationMessage(response.message));
//       } else {
//         response.message && dispatch(setRegistrationMessage(response.message));
//       }
//     }
//   } catch (e) {
//     dispatch(setError(e.message));
//   }
// };
