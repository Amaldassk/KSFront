
import { setUserData } from "../slice/authSlice";

export const initializeAuth = () => async (dispatch) => {
  const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken;

  if (accessToken) {
      await dispatch(setUserData(JSON.parse(localStorage.getItem("profile")).user));
    } else {
      //await dispatch(refreshTokenAction(refreshToken));
    }
};