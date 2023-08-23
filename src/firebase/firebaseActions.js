import firebase from "./firebase";
import axios from "../axios";
import constants from "./../store/constants";

const register = (data) => {
  return async (dispatch) => {
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);

      var user = firebase.auth().currentUser;
      user
        .updateProfile({
          displayName: data.name,
          photoURL: null,
        })
        .then(() => {
          console.log("Sign-in provider: " + user.providerId);
          console.log("  Provider-specific UID: " + user.uid);
          console.log("  Name: " + user.displayName);
          console.log("  Email: " + user.email);
          console.log("  Photo URL: " + user.photoURL);
        })
        .catch((e) => console.log("err", e));

      //of success then dispatch the action
      dispatch({
        type: constants.ADD_NEW_USER,
        data: { ...user },
      });

      return {
        err: false,
      };
    } catch (err) {
      return {
        err: err.message,
      };
    }
  };
};

const login = (data) => {
  return async (dispatch) => {
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);

      var user = firebase.auth().currentUser;

      //of success then dispatch the action
      dispatch({
        type: constants.ADD_NEW_USER,
        data: { ...user },
      });

      return {
        err: false,
      };
    } catch (err) {
      return {
        err: err.message,
      };
    }
  };
};

export { register, login };
