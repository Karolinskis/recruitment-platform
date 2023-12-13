-- AlterTable
ALTER TABLE `atsiliepimai` MODIFY `id_Atsiliepimas` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `naudotojai` MODIFY `paskyros_sukurimo_data` DATE NULL DEFAULT CURRENT_TIMESTAMP(3);
