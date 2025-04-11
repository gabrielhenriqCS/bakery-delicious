/*
  Warnings:

  - You are about to drop the column `backeryId` on the `MenuCategory` table. All the data in the column will be lost.
  - You are about to drop the column `backeryId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `backeryId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `bakeryId` to the `MenuCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bakeryId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bakeryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MenuCategory" DROP CONSTRAINT "MenuCategory_backeryId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_backeryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_backeryId_fkey";

-- AlterTable
ALTER TABLE "MenuCategory" DROP COLUMN "backeryId",
ADD COLUMN     "bakeryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "backeryId",
ADD COLUMN     "bakeryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "backeryId",
ADD COLUMN     "bakeryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "MenuCategory" ADD CONSTRAINT "MenuCategory_bakeryId_fkey" FOREIGN KEY ("bakeryId") REFERENCES "Bakery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_bakeryId_fkey" FOREIGN KEY ("bakeryId") REFERENCES "Bakery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_bakeryId_fkey" FOREIGN KEY ("bakeryId") REFERENCES "Bakery"("id") ON DELETE CASCADE ON UPDATE CASCADE;
