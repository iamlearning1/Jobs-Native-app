import { AsyncStorage } from "react-native";
import { Facebook } from "expo";

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./actionTypes";

export const login = () => async dispatch => {
  let token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({
      type: FACEBOOK_LOGIN_SUCCESS,
      payload: token
    });
  } else {
    facebookLogin(dispatch);
  }
};

facebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    "430625001076953",
    {
      permissions: ["public_profile"]
    }
  );
  if (type === "cancel") {
    return dispatch({
      type: FACEBOOK_LOGIN_FAIL
    });
  }
  await AsyncStorage.setItem("token", token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
