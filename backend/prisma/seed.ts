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

  const properties = await prisma.property.createMany({
    data: [
      {
        id: '60e81edd-1f2c-4baf-94ee-19bc238e6792',
        created_by_user_id: 'e73dfdbe-27ca-44a1-a029-fbd7d161b0d2',
        name: '1 bedroom in Bikini Bottom',
        description: 'abc',
        location: 'Bikini Bottom',
        amount: 20,
        currency: 'mvr',
        contract_address: null,
        rented_by_user_id: null,
        status: 'empty',
        created_at: '2024-11-17 00:28:17.773',
        num_bathrooms: 4,
        updated_at: '2024-11-17 00:28:17.773',
        num_bedrooms: 8,
      },
      {
        id: '82f0ac7a-9cf0-4568-bec1-a89ee80b0b51',
        created_by_user_id: 'e73dfdbe-27ca-44a1-a029-fbd7d161b0d2',
        name: '4 bedroom apartment in Maldives Cove',
        description: 'abc',
        location: 'Maldives Cove',
        amount: 10,
        currency: 'mvr',
        contract_address: null,
        rented_by_user_id: null,
        status: 'empty',
        created_at: '2024-11-17 00:28:17.773',
        num_bathrooms: 2,
        updated_at: '2024-11-17 00:28:17.773',
        num_bedrooms: 4,
      },
    ],
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
