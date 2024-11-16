import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  // Create users
  const userTenant = await prisma.user.create({
    data: {
      email: 'tenant@gmail.com',
      password: '$2b$10$RnH5hFgMf8KcZeU4.x/uxu5xX44YzAy.Un0zOXql/CbPkv8SwXdB.',
      name: 'Test tenant',
      type: 'tenant',
    },
  });

  const userLandlord = await prisma.user.create({
    data: {
      email: 'landlord@gmail.com',
      password: '$2b$10$RnH5hFgMf8KcZeU4.x/uxu5xX44YzAy.Un0zOXql/CbPkv8SwXdB.',
      name: 'Test User (Raptor)',
      type: 'landlord',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
