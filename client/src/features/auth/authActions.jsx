import { LOGIN_USER, SIGN_OUT_USER } from './authConstants';
import { closeModal } from '../modals/modalActions'

export const login = (creds) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER, payload: { creds } })
    dispatch(closeModal())
  }
}

export const logout = () => {
  return {
    type: SIGN_OUT_USER
  }
}



// export const updatePassword = (creds) =>
//   async (dispatch, getState, {getFirebase}) => {
//     const firebase = getFirebase();
//     const user = firebase.auth().currentUser;
//     try {
//       await user.updatePassword(creds.newPassword1);
//       await dispatch(reset('account'));
//       toastr.success('Success', 'Your password has been updated')
//     } catch (error) {
//       throw new SubmissionError({
//         _error: error.message
//       })
//     }
//   }