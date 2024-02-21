/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "NodeType" AS ENUM ('CLIENT', 'SERVER');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Node" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "type" "NodeType" NOT NULL,

    CONSTRAINT "Node_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "nodeUuid" TEXT NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Node_uuid_key" ON "Node"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Record_uuid_key" ON "Record"("uuid");

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_nodeUuid_fkey" FOREIGN KEY ("nodeUuid") REFERENCES "Node"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
