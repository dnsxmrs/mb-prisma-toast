'use client';

import React from 'react';
import { signIn } from '../_action/auth';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';


const Signin = () => {
    const [state, signInAction] = useActionState(signIn, undefined);

    const handleGoogleLogin = () => {
        console.log('Google login clicked');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-4">
            <div className="w-full max-w-4xl flex rounded-2xl overflow-hidden shadow-2xl">
                {/* Left panel */}
                <div className="hidden md:flex md:w-1/2 bg-blue-500 p-12 flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Welcome Back</h2>
                        <p className="text-blue-100 text-lg">
                            Continue your journey with Magandang Buhay and discover new learning experiences.
                        </p>
                    </div>
                    <div className="mt-auto">
                        <svg className="w-full max-w-sm opacity-80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FFFFFF" d="M47.7,-57.2C59.9,-45.8,66.8,-28.6,68.8,-11.1C70.8,6.4,67.8,24.1,58,36.5C48.1,48.9,31.4,56,14.1,62.5C-3.3,69,-21.3,74.9,-34.7,69.4C-48,63.9,-56.7,47,-63.5,29.2C-70.3,11.4,-75.2,-7.3,-71.1,-24.4C-67,-41.5,-53.9,-57,-38.5,-67.8C-23.1,-78.7,-5.4,-84.9,11.4,-79.1C28.2,-73.3,35.5,-68.6,47.7,-57.2Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                </div>

                {/* Right panel */}
                <div className="w-full md:w-1/2 bg-white p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h1 className="text-2xl md:text-3xl font-bold text-blue-900">Sign In</h1>
                        <p className="text-gray-500 mt-2">Access your Magandang Buhay account</p>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex justify-center items-center gap-3 bg-white border border-gray-300 rounded-lg p-3 text-gray-700 hover:bg-gray-50 transition-colors mb-6 shadow-sm"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-200" />
                        <span className="mx-4 text-gray-400 text-sm">OR</span>
                        <hr className="flex-grow border-gray-200" />
                    </div>

                    <form action={signInAction}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="example@gmail.com"
                                required
                            />
                            {/* Safe access pattern for potentially undefined fields */}
                            {state?.errors && 'email' in state.errors && state.errors.email && (
                                <p className="text-red-500 text-sm mt-1 text-center">
                                    {Array.isArray(state.errors.email) ? state.errors.email[0] : state.errors.email}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="••••••••"
                                required
                            />
                            {state?.errors && 'password' in state.errors && state.errors.password && (
                                <p className="text-red-500 text-sm mt-1 text-center">
                                    {Array.isArray(state.errors.password) ? state.errors.password[0] : state.errors.password}
                                </p>
                            )}
                            <div className="pt-2 flex justify-end">
                                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
                            </div>
                        </div>
                        <SubmitButton />
                        {state?.errors && 'form' in state.errors && state.errors.form && (
                                <p className="text-red-500 text-sm mt-3 text-center">
                                {Array.isArray(state.errors.form) ? state.errors.form[0] : state.errors.form}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {pending ? 'Signing In...' : 'Sign In'}
        </button>
    );
}

export default Signin;
