/*
  Warnings:

  - You are about to drop the column `info` on the `Chip` table. All the data in the column will be lost.
  - Added the required column `imgUrl` to the `Chip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comboNr` to the `Combination` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgUrl` to the `Dip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chip" DROP COLUMN "info",
ADD COLUMN     "imgUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Combination" ADD COLUMN     "comboNr" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Dip" ADD COLUMN     "imgUrl" TEXT NOT NULL;
