/*
  Warnings:

  - You are about to drop the column `num_bedooms` on the `Property` table. All the data in the column will be lost.
  - Added the required column `num_bedrooms` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "num_bedooms",
ADD COLUMN     "num_bedrooms" INTEGER NOT NULL,
ALTER COLUMN "contract_address" DROP NOT NULL;
