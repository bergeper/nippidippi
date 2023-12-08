-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chip" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "flavor" TEXT NOT NULL,

    CONSTRAINT "Chip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dip" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "flavor" TEXT NOT NULL,

    CONSTRAINT "Dip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "combinationId" TEXT NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Combination" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "chipId" TEXT NOT NULL,
    "dipId" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Combination_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_combinationId_fkey" FOREIGN KEY ("combinationId") REFERENCES "Combination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Combination" ADD CONSTRAINT "Combination_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Combination" ADD CONSTRAINT "Combination_dipId_fkey" FOREIGN KEY ("dipId") REFERENCES "Dip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
