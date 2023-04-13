import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const products = await prisma.products.upsert({
    where: { name: 'Battlefield 2042' },
    update: {},
    create: {
      id: 1,
      name: 'Battlefield 2042',
      type: 'Xbox One | X|S',
      price: 210.5,
      url_image: 'http://localhost:3001/images/1.jpg',
    },
  });
  const sales = await prisma.sales.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      user_id: 3,
      seller_id: 2,
      total_price: 70.0,
      sale_date: '2021/12/08',
      status_sale: 'pedido recebido',
    },
  });
  const salesProducts = await prisma.sales_products.upsert({
    // where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      sale_id: 1,
      product_id: 2,
      quantity: 6,
    },
    where: {
      sale_id_product_id: {
        sale_id: 0,
        product_id: 0,
      },
    },
  });
  const users = await prisma.users.upsert({
    where: { email: 'filipebernardoeduardocosta@gmail.com' },
    update: {},
    create: {
      id: 1,
      name: 'Filipe Bernardo Eduardo Costa',
      email: 'filipebernardoeduardocosta@gmail.com',
      password: '$2a$10$u0FzQuq1dId4Sd2L0B03FOwR7YyPi7FB0mJPsn1ELhEcS7o8l81JC', //senha: nOg96hbb05
      cpf: 46360452464,
      mobile_number: 8326447157,
      address: 'Rua Cruzeiro do Sul',
      address_number: 871,
      district: 'Calafate',
      city: 'Rio Branco',
      state: 'AC',
      country: 'BR',
      cep: 69914374,
      role: 'administrator',
    },
  });
  console.log({ products, sales, salesProducts, users });
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
