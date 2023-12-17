'use client'
import { useState } from 'react';
import { addDoc, collection, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { signIn } from 'next-auth/react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  
  const handleSignUp = async (e) => {
    e.preventDefault();

    let data = {
      email,
      password,
    };

    try {
      const collectionName = collection(db, 'users');
      await addDoc(collectionName, data);
      setSignedUp(true);
    } catch (error) {
      console.log('error', error);
    }

    // Clear the form after submission
    setEmail('');
    setPassword('');
  };

  const handleLogin = async () => {
    // Sign in with NextAuth
    await signIn('firebase', { email, password });
   
  };

  if (signedUp) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
