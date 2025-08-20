import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Login'); // 'Login' or 'Sign Up'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (state === 'Sign Up') {
      console.log('Creating account with:', { name, email, password });
      // Add sign-up logic here
    } else {
      console.log('Logging in with:', { email, password });
      // Add login logic here
    }
  };

  return (
    <form className='min-h-[80vh] flex flex-col items-center justify-center gap-4' onSubmit={onSubmitHandler}>
      <div className='w-full max-w-sm p-4 border rounded-md'>
        <h2 className='text-xl font-bold mb-2'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
        <p className='mb-4'>Please {state === 'Sign Up' ? 'create an account' : 'log in'} to book an appointment</p>

        {state === 'Sign Up' && (
          <div>
            <label>Full Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="w-full border px-2 py-1 mb-3"
            />
          </div>
        )}

        <div>
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="w-full border px-2 py-1 mb-3"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="w-full border px-2 py-1 mb-3"
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {state === 'Sign Up' ? 'Sign Up' : 'Login'}
        </button>

        <p className='mt-4'>
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            className='text-blue-500 cursor-pointer'
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? 'Login here' : 'Create one'}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
