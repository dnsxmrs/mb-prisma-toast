'use server'

import prisma from '@/lib/prisma'
import { createSession, deleteSession } from '@/lib/session'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const signInSchema = z.object({
    email: z.string().email('Invalid email address').trim(),
    password: z.string().min(8, 'Password must be at least 8 characters').trim(),
})

export async function signIn(prevState: any, formData: FormData) {
    let success = false;

    const raw = {
        email: formData.get('email')?.toString(),
        password: formData.get('password')?.toString(),
    }

    const parsed = signInSchema.safeParse(raw)

    if (!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors }
    }

    const { email, password } = parsed.data

    try {
        const user = await prisma.user.findUnique({ where: { email } })

        if (!user || !(await bcrypt.compare(password, user.hashed_password))) {
            return { errors: { form: ['Invalid email or password'] } }
        }

        await createSession(user.id.toString());

        success = true;
    } catch (e) {
        return { errors: { form: ['Internal server error'] } }
    } finally {
        await prisma.$disconnect()
        if (success) {
            redirect('/dashboard');
        }
    }
}

export async function signOut() {
    await deleteSession();

    redirect('/sign-in');
}

