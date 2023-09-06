import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';
import styles from './AuthPage.module.css';

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className={styles.AuthPage}>
      <div>
      
        {/* <h1 className='authHead'><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/untested.png" className='authIcon'alt="authIcon"/>Auth Page</h1> */}
        <img src="https://i.ibb.co/vBxzSkP/ideogram-8.jpg" className='authpageLogo' alt='logo img'></img>
        <button className='authBtn'
          onClick={() => {
            setShowLogin(!showLogin);
          }}
        >
          {showLogin ? 'Sign Up' : 'Login'}
        </button>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm  setUser={setUser}/>}
    </main>
  );
}