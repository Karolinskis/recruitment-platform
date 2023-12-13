-- CreateTable
CREATE TABLE `atsiliepimai` (
    `aprasymas` VARCHAR(255) NULL,
    `tipas` BOOLEAN NULL,
    `id_Atsiliepimas` INTEGER NOT NULL,
    `fk_Naudotojasid_Naudotojas` INTEGER NOT NULL,
    `fk_darbuotojas` INTEGER NOT NULL,

    INDEX `naudotojas_pildo_atsiliepima`(`fk_Naudotojasid_Naudotojas`),
    PRIMARY KEY (`id_Atsiliepimas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `atsiliepimo_tipai` (
    `id_atsiliepimo_tipai` INTEGER NOT NULL,
    `name` VARCHAR(13) NOT NULL,

    PRIMARY KEY (`id_atsiliepimo_tipai`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `darbdavys` (
    `id` INTEGER NOT NULL,

    UNIQUE INDEX `darbdavys_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `darbo_pasiulymai` (
    `pavadinimas` VARCHAR(255) NULL,
    `data` DATE NULL,
    `aprasymas` VARCHAR(255) NULL,
    `id_Darbo_pasiulymas` INTEGER NOT NULL,
    `fk_Skelbimo_anketaid_Skelbimo_anketa` INTEGER NOT NULL,
    `fk_Darbo_skelbimasid_Darbo_skelbimas` INTEGER NOT NULL,
    `fk_Naudotojasid_Naudotojas` INTEGER NOT NULL,
    `fk_Uzsakymasid_Uzsakymas` INTEGER NULL,
    `fk_Naudotojasid_Naudotojas1` INTEGER NOT NULL,

    INDEX `Darbutojas_patvirtitina`(`fk_Uzsakymasid_Uzsakymas`),
    INDEX `darbdavys_siuncia_pasiulyma`(`fk_Naudotojasid_Naudotojas1`),
    INDEX `darboSkelbimas_turi_darboPasiulyma`(`fk_Darbo_skelbimasid_Darbo_skelbimas`),
    INDEX `darbuotojas_gauna_pasiulyma`(`fk_Naudotojasid_Naudotojas`),
    INDEX `skelbimoAnketa_turi_darboPasiulymas`(`fk_Skelbimo_anketaid_Skelbimo_anketa`),
    PRIMARY KEY (`id_Darbo_pasiulymas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `darbo_skelbimai` (
    `pavadinimas` VARCHAR(255) NULL,
    `data` DATE NULL,
    `aprasymas` VARCHAR(255) NULL,
    `atlyginimas` VARCHAR(255) NULL,
    `trukme` DATE NULL,
    `id_Darbo_skelbimas` INTEGER NOT NULL,
    `fk_Projektasid_Projektas` INTEGER NOT NULL,
    `fk_Naudotojasid_Naudotojas` INTEGER NOT NULL,

    INDEX `Sukuria`(`fk_Naudotojasid_Naudotojas`),
    INDEX `projektas_turi_darboSkelbima`(`fk_Projektasid_Projektas`),
    PRIMARY KEY (`id_Darbo_skelbimas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `igudziai` (
    `pavadinimas` VARCHAR(255) NULL,
    `sertifikatas` VARCHAR(255) NULL,
    `id_igudziai` INTEGER NOT NULL,
    `fk_Darbuotojasid_Darbuotojas` INTEGER NOT NULL,
    `fk_Naudotojasid_Naudotojas` INTEGER NOT NULL,

    INDEX `naudotojas_turi_igudzius`(`fk_Naudotojasid_Naudotojas`),
    PRIMARY KEY (`id_igudziai`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `naudotojai` (
    `vardas` VARCHAR(255) NULL,
    `pavarde` VARCHAR(255) NULL,
    `lytis` VARCHAR(255) NULL,
    `miestas` VARCHAR(255) NULL,
    `el_pastas` VARCHAR(255) NULL,
    `tel_numeris` VARCHAR(255) NULL,
    `slaptazodis` VARCHAR(255) NULL,
    `gimimo_data` DATE NULL,
    `linkedin_url` VARCHAR(255) NULL,
    `paskyros_sukurimo_data` DATE NULL,
    `patvirtintas` BOOLEAN NULL,
    `blokavimo_pabaiga` DATE NULL,
    `role` INTEGER NULL,
    `id_Naudotojas` INTEGER NOT NULL,

    INDEX `role`(`role`),
    PRIMARY KEY (`id_Naudotojas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `naudotoju_patiktukai` (
    `darbuotojas_id` INTEGER NOT NULL,
    `darbdavys_id` INTEGER NOT NULL,

    UNIQUE INDEX `naudotoju_patiktukai_darbdavys_id_darbuotojas_id_key`(`darbdavys_id`, `darbuotojas_id`),
    PRIMARY KEY (`darbuotojas_id`, `darbdavys_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nuotraukos` (
    `url` VARCHAR(255) NULL,
    `pavadinimas` VARCHAR(255) NULL,
    `alternatyvus_tekstas` VARCHAR(255) NULL,
    `id_Nuotrauka` INTEGER NOT NULL,
    `fk_Naudotojasid_Naudotojas` INTEGER NOT NULL,

    INDEX `naudotojas_ikelia_nuotraukas`(`fk_Naudotojasid_Naudotojas`),
    PRIMARY KEY (`id_Nuotrauka`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pranesimai` (
    `laikas` DATE NULL,
    `pavadinimas` VARCHAR(255) NULL,
    `trumpas_aprasymas` VARCHAR(255) NULL,
    `aprasymas` VARCHAR(255) NULL,
    `id_Pranešimas` INTEGER NOT NULL,
    `fk_Naudotojasid_Naudotojas` INTEGER NOT NULL,

    INDEX `naudotojas_gauna_pranesima`(`fk_Naudotojasid_Naudotojas`),
    PRIMARY KEY (`id_Pranešimas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projektai` (
    `pavadinimas` VARCHAR(255) NULL,
    `aprasymas` VARCHAR(255) NULL,
    `pradzia` DATE NULL,
    `pabaiga` DATE NULL,
    `id_Projektas` INTEGER NOT NULL,

    PRIMARY KEY (`id_Projektas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id_roles` INTEGER NOT NULL,
    `name` VARCHAR(16) NOT NULL,

    PRIMARY KEY (`id_roles`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skelbimu_anketos` (
    `pavadinimas` VARCHAR(255) NULL,
    `aprasymas` VARCHAR(255) NULL,
    `valandinis_atlyginimas` DOUBLE NULL,
    `validuota` BOOLEAN NULL,
    `id_Skelbimo_anketa` INTEGER NOT NULL,
    `fk_Darbuotojasid_Darbuotojas` INTEGER NOT NULL,
    `fk_Naudotojasid_Naudotojas` INTEGER NOT NULL,

    UNIQUE INDEX `fk_Darbuotojasid_Darbuotojas`(`fk_Darbuotojasid_Darbuotojas`),
    INDEX `w`(`fk_Naudotojasid_Naudotojas`),
    PRIMARY KEY (`id_Skelbimo_anketa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `uzduotys` (
    `pavadinimas` VARCHAR(255) NULL,
    `pradzia` DATE NULL,
    `pabaiga` DATE NULL,
    `aprasymas` VARCHAR(255) NULL,
    `id_Uzduotis` INTEGER NOT NULL,
    `fk_Uzsakymasid_Uzsakymas` INTEGER NOT NULL,
    `fk_Projektasid_Projektas` INTEGER NOT NULL,

    INDEX `projektas_turi_uzduoti`(`fk_Projektasid_Projektas`),
    INDEX `uzsakymas_turi_uzduoti`(`fk_Uzsakymasid_Uzsakymas`),
    PRIMARY KEY (`id_Uzduotis`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `uzimtumo_grafikai` (
    `pavadinimas` VARCHAR(255) NULL,
    `pradzia` DATE NULL,
    `pabaiga` DATE NULL,
    `id_Uzimtumo_grafikas` INTEGER NOT NULL,
    `fk_Naudotojasid_Naudotojas` INTEGER NOT NULL,

    INDEX `naudotojas_pildo_grafika`(`fk_Naudotojasid_Naudotojas`),
    PRIMARY KEY (`id_Uzimtumo_grafikas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `uzsakymai` (
    `pavadinimas` VARCHAR(255) NULL,
    `aprasymas` VARCHAR(255) NULL,
    `pradzia` DATE NULL,
    `pabaiga` DATE NULL,
    `id_Uzsakymas` INTEGER NOT NULL,
    `fk_Darbdavysid_Darbdavys` INTEGER NOT NULL,

    PRIMARY KEY (`id_Uzsakymas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `atsiliepimai` ADD CONSTRAINT `naudotojas_pildo_atsiliepima` FOREIGN KEY (`fk_Naudotojasid_Naudotojas`) REFERENCES `naudotojai`(`id_Naudotojas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `atsiliepimai` ADD CONSTRAINT `atsiliepimai_fk_darbuotojas_fkey` FOREIGN KEY (`fk_darbuotojas`) REFERENCES `darbdavys`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `darbdavys` ADD CONSTRAINT `darbdavys_id_fkey` FOREIGN KEY (`id`) REFERENCES `naudotojai`(`id_Naudotojas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `darbo_pasiulymai` ADD CONSTRAINT `Darbutojas_patvirtitina` FOREIGN KEY (`fk_Uzsakymasid_Uzsakymas`) REFERENCES `uzsakymai`(`id_Uzsakymas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `darbo_pasiulymai` ADD CONSTRAINT `darbdavys_siuncia_pasiulyma` FOREIGN KEY (`fk_Naudotojasid_Naudotojas1`) REFERENCES `naudotojai`(`id_Naudotojas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `darbo_pasiulymai` ADD CONSTRAINT `darboSkelbimas_turi_darboPasiulyma` FOREIGN KEY (`fk_Darbo_skelbimasid_Darbo_skelbimas`) REFERENCES `darbo_skelbimai`(`id_Darbo_skelbimas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `darbo_pasiulymai` ADD CONSTRAINT `darbuotojas_gauna_pasiulyma` FOREIGN KEY (`fk_Naudotojasid_Naudotojas`) REFERENCES `naudotojai`(`id_Naudotojas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `darbo_pasiulymai` ADD CONSTRAINT `skelbimoAnketa_turi_darboPasiulymas` FOREIGN KEY (`fk_Skelbimo_anketaid_Skelbimo_anketa`) REFERENCES `skelbimu_anketos`(`id_Skelbimo_anketa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `darbo_skelbimai` ADD CONSTRAINT `Sukuria` FOREIGN KEY (`fk_Naudotojasid_Naudotojas`) REFERENCES `naudotojai`(`id_Naudotojas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `darbo_skelbimai` ADD CONSTRAINT `projektas_turi_darboSkelbima` FOREIGN KEY (`fk_Projektasid_Projektas`) REFERENCES `projektai`(`id_Projektas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `igudziai` ADD CONSTRAINT `naudotojas_turi_igudzius` FOREIGN KEY (`fk_Naudotojasid_Naudotojas`) REFERENCES `naudotojai`(`id_Naudotojas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `naudotojai` ADD CONSTRAINT `naudotojai_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles`(`id_roles`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `naudotoju_patiktukai` ADD CONSTRAINT `naudotoju_patiktukai_darbdavys_id_fkey` FOREIGN KEY (`darbdavys_id`) REFERENCES `darbdavys`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `naudotoju_patiktukai` ADD CONSTRAINT `naudotoju_patiktukai_darbuotojas_id_fkey` FOREIGN KEY (`darbuotojas_id`) REFERENCES `naudotojai`(`id_Naudotojas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nuotraukos` ADD CONSTRAINT `naudotojas_ikelia_nuotraukas` FOREIGN KEY (`fk_Naudotojasid_Naudotojas`) REFERENCES `naudotojai`(`id_Naudotojas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `pranesimai` ADD CONSTRAINT `naudotojas_gauna_pranesima` FOREIGN KEY (`fk_Naudotojasid_Naudotojas`) REFERENCES `naudotojai`(`id_Naudotojas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `skelbimu_anketos` ADD CONSTRAINT `w` FOREIGN KEY (`fk_Naudotojasid_Naudotojas`) REFERENCES `naudotojai`(`id_Naudotojas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `uzduotys` ADD CONSTRAINT `projektas_turi_uzduoti` FOREIGN KEY (`fk_Projektasid_Projektas`) REFERENCES `projektai`(`id_Projektas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `uzduotys` ADD CONSTRAINT `uzsakymas_turi_uzduoti` FOREIGN KEY (`fk_Uzsakymasid_Uzsakymas`) REFERENCES `uzsakymai`(`id_Uzsakymas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `uzimtumo_grafikai` ADD CONSTRAINT `naudotojas_pildo_grafika` FOREIGN KEY (`fk_Naudotojasid_Naudotojas`) REFERENCES `naudotojai`(`id_Naudotojas`) ON DELETE RESTRICT ON UPDATE RESTRICT;
