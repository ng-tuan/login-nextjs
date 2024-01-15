'use client';
import { NextPage } from 'next';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type LoginForm = {
  name: string;
  username: string;
  password: string;
};

const Login: NextPage = () => {
  const { handleSubmit, control } = useForm<LoginForm>();

  const submit = (values: LoginForm) => {
    console.log('aaa', values);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
      <div className="max-w-md w-full bg-white rounded-lg  shadow-lg shadow-stone-700 p-8">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <Controller
              control={control}
              name="name"
              rules={{
                required: true,
              }}
              render={({ field, fieldState }) => (
                <>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-400 ${fieldState.error && 'border-red-500'}`}
                    autoFocus
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter your name"
                  />
                </>
              )}
            />
          </div>
          <div className="mb-4">
            <Controller
              control={control}
              name="username"
              rules={{
                required: true,
              }}
              render={({ field, fieldState }) => (
                <>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                  </label>
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-400 ${fieldState.error && 'border-red-500'}`}
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter your username"
                  />
                </>
              )}
            />
          </div>
          <div className="mb-4">
            <Controller
              control={control}
              name="password"
              rules={{
                required: true,
              }}
              render={({ field, fieldState }) => (
                <>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-400 ${fieldState.error && 'border-red-500'}`}
                    value={field.value}
                    onChange={field.onChange}
                    type="password"
                    placeholder="Enter your password"
                  />
                </>
              )}
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign up
            </button>
          </div>
          <div className="flex items-center justify-center">
            Already have an account?{' '}
            <a
              className="ml-1 inline align-middle font-bold text-sm text-blue-500 hover:text-blue-800 focus:outline-blue-400"
              href="/"
            >
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
