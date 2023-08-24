'use client';
import styles from './login.module.css'
import SignInOutButton from './SignInOutButton';
import Link from 'next/link';

const LoginForm = () => {

  return (
    <>
      <div className={`${styles.loginContainer}`}>
        <h2 className={`${styles.header}`}>Sign in to your account</h2>
        <form >
          <fieldset className={`${styles.loginForm}`}>
            <div className={`${styles.inputContainer}`}>
              <label 
                className={`${styles.inputText}`} 
                htmlFor="username"
              >
                User Name:
              </label>
              <input 
                className={`${styles.input}`} 
                  type="text" name="username" required 
              />
            </div>
            <div className={`${styles.inputContainer} `}>
              <label 
                className={`${styles.inputText}`} 
                htmlFor="password"
                >
                  Password:
                </label>
              <input 
                className={`${styles.input}`} 
                type="text" name="password" required 
              />
            </div>
            <div className={`${styles.buttonContainer}`}>
              <SignInOutButton />
            </div>
          </fieldset>
        </form>
        <div className={`${styles.signUpContainer}`}>
          <h4 className={`${styles.textHeader}`}>Don't have an account yet?</h4>
          <Link
            className={`${styles.text}`}
            href={'/sign-up'}
            >
            Sign up here!
          </Link>
        </div>
      </div>
    </>
  )
}

export default LoginForm