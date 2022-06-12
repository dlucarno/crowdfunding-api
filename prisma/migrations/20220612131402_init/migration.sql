/*
  Warnings:

  - You are about to drop the `_projecttouser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_projecttouser` DROP FOREIGN KEY `_ProjectToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_projecttouser` DROP FOREIGN KEY `_ProjectToUser_B_fkey`;

-- DropTable
DROP TABLE `_projecttouser`;

-- CreateTable
CREATE TABLE `ProjectsOnUsers` (
    `userId` INTEGER NOT NULL,
    `projectId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`, `projectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProjectsOnUsers` ADD CONSTRAINT `ProjectsOnUsers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectsOnUsers` ADD CONSTRAINT `ProjectsOnUsers_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
