// app/(dashboard)/admin/AdminDashboard.tsx
'use client';

import { signOut } from '@/app/(auth)/_action/auth';

interface User {
    first_name: string;
    last_name: string;
    email: string;
}

export default function AdminDashboard({ user }: { user: User }) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Admin Dashboard</h1>
                <p className="text-lg mb-2">
                    Welcome, <span className="font-semibold">{user.first_name} {user.last_name}</span>!
                </p>
                <p className="text-lg mb-4">
                    Email: <span className="font-semibold">{user.email}</span>
                </p>
                <button
                    onClick={() => signOut()}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
}
