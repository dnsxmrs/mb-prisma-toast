import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    try {
        const plainPassword = 'password123';
        const hashedPassword = await bcrypt.hash(plainPassword, 12);

        // Define the users to be seeded
        const users = [
            {
                first_name: 'Erice Michael',
                last_name: 'Marial',
                email: 'ericemarial@gmail.com',
                hashed_password: hashedPassword,
            },
            {
                first_name: 'Jomari',
                last_name: 'Depalco',
                email: 'Depalco06@gmail.com',
                hashed_password: hashedPassword,
            },
            {
                first_name: 'Danica',
                last_name: 'Gimena',
                email: 'Danicagimena1816@gmail.com',
                hashed_password: hashedPassword,
            },
            {
                first_name: 'Jasmine Nicole',
                last_name: 'Mario',
                email: 'mariojasminenicole@gmail.com',
                hashed_password: hashedPassword,
            },
            {
                first_name: 'Valerie Anne',
                last_name: 'Sangalang',
                email: 'valerieannesangalang14@gmail.com',
                hashed_password: hashedPassword,
            },
        ];

        // Create each user
        for (const user of users) {
            const createdUser = await prisma.user.upsert({
                where: { email: user.email },
                update: user,
                create: user,
            });
        }

        console.log('✅ Seed complete');
    } catch (error) {
        console.error('Error during seeding:', error);
        throw error;
    }
}

// Execute the main function
main()
    .catch((e) => {
        console.error('❌ Seed error:', e);
        process.exit(1);
    })
    .finally(async () => {
        // Disconnect Prisma client
        await prisma.$disconnect();
    });