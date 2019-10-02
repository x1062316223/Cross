import Firebase, {db} from '../config/Firebase.js';

// define types
export const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
export const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

// actions

export const updateFirstName = firstname => {
  return {
    type: UPDATE_FIRSTNAME,
    payload: firstname,
  };
};
export const updateLastName = lastname => {
  return {
    type: UPDATE_LASTNAME,
    payload: lastname,
  };
};

export const updateEmail = email => {
  return {
    type: UPDATE_EMAIL,
    payload: email,
  };
};

export const updatePassword = password => {
  return {
    type: UPDATE_PASSWORD,
    payload: password,
  };
};
//signup user with user details
export const signup = () => {
  return async (dispatch, getState) => {
    try {
      //get user details with state
      const {email, password, firstname, lastname} = getState().user;
      //signup with firebase
      const response = await Firebase.auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      //if signup returns no error
      if (response.user.uid != null) {
        //get user id with firebase created
        const user = {
          uid: response.user.uid,
          email: email,
          firstname: firstname,
          lastname: lastname,
        };

        //save user details to firebase cloud
        db.collection('users')
          .doc(response.user.uid)
          .set(user);

        dispatch({type: SIGNUP, payload: user});
      }
    } catch (e) {
      alert(e);
    }
  };
};
//login method for firebase email auth
export const login = () => {
  return async (dispatch, getState) => {
    try {
      const {email, password} = getState().user;
      const response = await Firebase.auth().signInWithEmailAndPassword(
        email,
        password,
      );

      dispatch(getUser(response.user.uid));
    } catch (e) {
      alert(e);
    }
  };
};
//get user to determine if user is already logged in
export const getUser = uid => {
  return async (dispatch, getState) => {
    try {
      const user = await db
        .collection('users')
        .doc(uid)
        .get();

      dispatch({type: LOGIN, payload: user.data()});
    } catch (e) {
      alert(e);
    }
  };
};

//get userstate so user open the app won't logged in
export const logOut = () => {
  return () => {
    const user = user.getState();
  };
};
