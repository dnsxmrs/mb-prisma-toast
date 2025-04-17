// app/(dashboard)/admin/page.tsx
import { getAuthUser } from '@/app/(auth)/_action/getAuthUser';
import AdminDashboard from './../AdminDashboard';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
    const user = await getAuthUser();

    if (!user) {
        redirect('/sign-in');
    }

    return <AdminDashboard user={user} />;
}
