/*
  Warnings:

  - You are about to drop the `VetQuery` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "VetQuery";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "vetQueries" (
    "clientName" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "petName" TEXT NOT NULL,
    "reason" TEXT NOT NULL
);
