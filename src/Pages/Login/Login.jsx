// React
import classNames from 'classnames';
import { useContext } from 'react';
import { Context } from 'index';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Components & elements

// Styles

import globalStyle from '../../styles/global/global.module.scss';
import styles from './Login.module.scss';

// Intertfases

const Login = () => {
  const { auth } = useContext(Context);
  const login = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  };

  return (
    // Login

    <div className={classNames(styles.Login, styles.modal)}>
      <div className={styles.content}>
        <button className={styles.btn} onClick={login}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
