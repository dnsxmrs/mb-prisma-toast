// @/app/(auth)/_action/getAuthUser
import "server-only";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import prisma from "@/lib/prisma";

export async function getAuthUser() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("session")?.value;

        if (!token) return null;

        const sessionData = await decrypt(token);

        if (!sessionData?.userId) return null;

        const user = await prisma.user.findUnique({
            where: { id: Number(sessionData.userId) },
        });

        if (!user) return null;

        // Remove sensitive data before returning
        const { hashed_password, ...safeUser } = user;

        console.log("User found:", hashed_password);

        return safeUser;
    } catch (error) {
        console.error("Error in getCurrentUser:", error);
        return null;
    }
}
