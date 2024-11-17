/*
  Warnings:

  - Added the required column `contract_address` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "contract_address" TEXT NOT NULL,
ADD COLUMN     "rented_by_user_id" TEXT,
ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "wallet_address" TEXT;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_rented_by_user_id_fkey" FOREIGN KEY ("rented_by_user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
