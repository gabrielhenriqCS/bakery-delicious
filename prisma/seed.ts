import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Cria uma padaria
  const backery = await prisma.backery.create({
    data: {
      name: "Backery Delicious",
      description: "A melhor padaria da cidade",
      avatarImageUrl: "https://example.com/padaria-do-joao.jpg",
    },
  });

  // Cria categorias de menu
  const breadCategory = await prisma.menuCategory.create({
    data: {
      name: "Pães",
      backeryId: backery.id,
    },
  });

  const cakeCategory = await prisma.menuCategory.create({
    data: {
      name: "Bolos",
      backeryId: backery.id,
    },
  });

  // Cria produtos
  await prisma.product.createMany({
    data: [
      {
        name: "Pão Francês",
        description: "Pão francês fresquinho",
        price: 0.50,
        imageUrl: "https://unsplash.com/pt-br/fotografias/uma-tabua-de-corte-de-madeira-coberta-com-rolos-em-cima-de-uma-mesa-mSJCk6k2WtE",
        ingredients: ["Farinha de trigo", "Água", "Sal", "Fermento"],
        backeryId: backery.id,
        menuCategoryId: breadCategory.id,
      },
      {
        name: "Pão Integral",
        description: "Pão integral saudável",
        price: 0.75,
        imageUrl: "https://unsplash.com/pt-br/fotografias/dois-paes-sentados-em-cima-de-uma-mesa-de-madeira-MKq-u5-_aj4",
        ingredients: ["Farinha integral", "Água", "Sal", "Fermento"],
        backeryId: backery.id,
        menuCategoryId: breadCategory.id,
      },
      {
        name: "Bolo de Chocolate",
        description: "Bolo de chocolate caseiro",
        price: 15.00,
        imageUrl: "https://unsplash.com/pt-br/fotografias/bolo-de-chocolate-na-placa-de-ceramica-branca-LDnmyOaA-ew",
        ingredients: ["Farinha de trigo", "Chocolate", "Cobertura de chocolate"],
        backeryId: backery.id,
        menuCategoryId: cakeCategory.id,
      },
      {
        name: "Bolo de Cenoura",
        description: "Bolo de cenoura com cobertura de chocolate",
        price: 12.00,
        imageUrl: "https://unsplash.com/pt-br/fotografias/um-bolo-com-cobertura-de-chocolate-xw9d1lm8M_M",
        ingredients: ["Farinha de trigo", "Cenoura", "Cobertura de chocolate"],
        backeryId: backery.id,
        menuCategoryId: cakeCategory.id,
      },
      {
        name: "Bolo de Limão",
        description: "Bolo de limão com cobertura de limão",
        price: 12.00,
        imageUrl: "https://unsplash.com/pt-br/fotografias/um-bolo-com-limoes-e-alecrim-em-uma-tabua-de-corte-WA73OBvQ_zw",
        ingredients: ["Farinha de trigo", "Limão", "Cobertura de limão"],
        backeryId: backery.id,
        menuCategoryId: cakeCategory.id,
      },
    ],
  });

  console.log("Dados de seed foram criados com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });