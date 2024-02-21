-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_nodeUuid_fkey";

-- AlterTable
ALTER TABLE "Record" ALTER COLUMN "nodeUuid" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_nodeUuid_fkey" FOREIGN KEY ("nodeUuid") REFERENCES "Node"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
