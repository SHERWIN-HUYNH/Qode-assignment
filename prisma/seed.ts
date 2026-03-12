import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Create sample image
  const image = await prisma.image.create({
    data: {
      cloudinaryId: "sample-id-123",
      cloudinaryUrl: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  console.log("Created image:", image);

  // Create sample comment
  const comment = await prisma.comment.create({
    data: {
      imageId: image.id,
      content: "Beautiful image!",
    },
  });
  console.log("Created comment:", comment);
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
