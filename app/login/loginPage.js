// LoginPage.js

import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const handleLogin = async () => {
    // Sign in with NextAuth
    await signIn('firebase', { /* add additional parameters if needed */ });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
