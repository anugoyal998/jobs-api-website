-- AlterTable
ALTER TABLE `User` ADD COLUMN `apiKeyId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `ApiKey` (
    `id` VARCHAR(191) NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ApiKey_key_key`(`key`),
    UNIQUE INDEX `ApiKey_userId_key_enabled_key`(`userId`, `key`, `enabled`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ApiRequest` (
    `id` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `method` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,
    `duration` INTEGER NOT NULL,
    `usedApiKey` VARCHAR(191) NOT NULL,
    `apiKeyId` VARCHAR(191) NOT NULL,

    INDEX `ApiRequest_apiKeyId_timestamp_idx`(`apiKeyId`, `timestamp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ApiKey` ADD CONSTRAINT `ApiKey_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ApiRequest` ADD CONSTRAINT `ApiRequest_apiKeyId_fkey` FOREIGN KEY (`apiKeyId`) REFERENCES `ApiKey`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
