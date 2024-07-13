-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "group" TEXT,
    "order" TEXT,
    "family" TEXT,
    "genus" TEXT,
    "species" TEXT,
    "area" TEXT,
    "origin" TEXT,
    "country" TEXT,
    "from" INTEGER,
    "to" INTEGER,
    "sampling_info" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contributor" TEXT NOT NULL DEFAULT '{ "Gema Hernandez-Milian" }',

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
