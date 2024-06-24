/*
  Warnings:

  - You are about to drop the column `time` on the `VetQuery` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VetQuery" (
    "clientName" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "petName" TEXT NOT NULL,
    "reason" TEXT NOT NULL
);
INSERT INTO "new_VetQuery" ("clientName", "data", "petName", "reason") SELECT "clientName", "data", "petName", "reason" FROM "VetQuery";
DROP TABLE "VetQuery";
ALTER TABLE "new_VetQuery" RENAME TO "VetQuery";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
