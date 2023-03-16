import React from 'react';
import { loginWithGoogle } from '../../firebase/auth';

export default function Home() {
  return <div><button onClick={loginWithGoogle}>Login</button></div>;
}
