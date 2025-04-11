import { db } from "../lib/prisma"

export const getBakeryBySlug = async (slug: string) => {
  const bakery = await db.bakery.findUnique({
    where: { slug },
  })
  return bakery
}