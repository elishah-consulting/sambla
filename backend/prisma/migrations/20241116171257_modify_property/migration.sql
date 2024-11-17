/*
  Warnings:

  - You are about to drop the column `numBath` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `numBed` on the `Property` table. All the data in the column will be lost.
  - Added the required column `num_bathrooms` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `num_bedooms` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "numBath",
DROP COLUMN "numBed",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "num_bathrooms" INTEGER NOT NULL,
ADD COLUMN     "num_bedooms" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
