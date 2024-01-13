DROP DATABASE IF EXISTS cartes;
CREATE DATABASE IF NOT EXISTS cartes ;
USE cartes ;

-- -----------------------------------------------------
-- Table `cartes`.`base`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cartes`.`base` ;

CREATE TABLE IF NOT EXISTS `cartes`.`base` (
  `idbase` INT NOT NULL AUTO_INCREMENT,
  `cartes` VARCHAR(45) COLLATE 'utf8mb3_bin' NULL DEFAULT NULL,
  `annee` VARCHAR(45) COLLATE 'utf8mb3_bin' NULL DEFAULT NULL,
  `couleur` TINYINT NULL DEFAULT NULL,
  `ville` TINYINT NULL DEFAULT NULL,
  `campagne` TINYINT NULL DEFAULT NULL,
  `mer` TINYINT NULL DEFAULT NULL,
  `montagne` TINYINT NULL DEFAULT NULL,
  `personnes` TINYINT NULL DEFAULT NULL,
  `animaux` TINYINT NULL DEFAULT NULL,
  `ete` TINYINT NULL DEFAULT NULL,
  `automne` TINYINT NULL DEFAULT NULL,
  `hiver` TINYINT NULL DEFAULT NULL,
  `printemps` TINYINT NULL DEFAULT NULL,
  `localite` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idbase`))
ENGINE = InnoDB
AUTO_INCREMENT = 21;


-- -----------------------------------------------------
-- Table `cartes`.`localite`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cartes`.`localite` ;

CREATE TABLE IF NOT EXISTS `cartes`.`localite` (
  `idlocalite` INT NOT NULL,
  `nomlocalite` VARCHAR(45) COLLATE 'utf8mb3_bin' NULL DEFAULT NULL,
  `id_region` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idlocalite`))
ENGINE = InnoDB
AUTO_INCREMENT = 21;


-- -----------------------------------------------------
-- Table `cartes`.`pays`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cartes`.`pays` ;

CREATE TABLE IF NOT EXISTS `cartes`.`pays` (
  `idpays` INT NOT NULL,
  `nompays` VARCHAR(45) COLLATE 'utf8mb3_bin' NULL DEFAULT NULL,
  PRIMARY KEY (`idpays`))
ENGINE = InnoDB
AUTO_INCREMENT = 2;


-- -----------------------------------------------------
-- Table `cartes`.`regions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cartes`.`regions` ;

CREATE TABLE IF NOT EXISTS `cartes`.`regions` (
  `idregions` INT NOT NULL,
  `nomregion` VARCHAR(45) COLLATE 'utf8mb3_bin' NULL DEFAULT NULL,
  `id_pays` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idregions`))
ENGINE = InnoDB
AUTO_INCREMENT = 12;

INSERT INTO `cartes`.`pays` (`idpays`, `nompays`) VALUES ( 1, 'France');

INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 1, 'Paris', 1);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 2, 'Marseille', 2);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 3, 'Lyon', 3);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 4, 'Toulouse', 4);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 5, 'Nice', 2);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 6, 'Nantes', 3);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 7, 'Strasbourg', 6);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 8, 'Montpellier', 4);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 9, 'Bordeaux', 7);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 10, 'Lilles', 8);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 11, 'Rennes', 9);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 12, 'Reims', 6);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 13, 'Le Havre', 10);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 14, 'St Etienne', 3);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 15, 'Toulon', 2);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 16, 'Grenoble', 3);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 17, 'Dijon', 11);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 18, 'Angers', 5);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 19, 'Nimes', 4);
INSERT INTO `cartes`.`localite` (`idlocalite`, `nomlocalite`, `id_region`) VALUES ( 20, 'Aix-en-Provence', 2);

INSERT INTO `cartes`.`regions` (`idregions`, `nomregion`, `id_pays`) VALUES ( 1, 'Île-de-France', 1);
INSERT INTO `cartes`.`regions` (`idregions`, `nomregion`, `id_pays`) VALUES ( 2, 'Provence-Alpes-Côte d Azur', 1);
INSERT INTO `cartes`.`regions` (`idregions`, `nomregion`, `id_pays`) VALUES ( 3, 'Auvergne-Rhône-Alpes', 1);
INSERT INTO `cartes`.`regions` (`idregions`, `nomregion`, `id_pays`) VALUES ( 4, 'Occitanie', 1);
INSERT INTO `cartes`.`regions` (`idregions`, `nomregion`, `id_pays`) VALUES ( 5, 'Pays de la Loire', 1);
INSERT INTO `cartes`.`regions` (`idregions`, `nomregion`, `id_pays`) VALUES ( 6, 'Grand Est', 1);
INSERT INTO `cartes`.`regions` (`idregions`, `nomregion`, `id_pays`) VALUES ( 7, 'Nouvelle-Aquitaine', 1);
INSERT INTO `cartes`.`regions` (`idregions`, `nomregion`, `id_pays`) VALUES ( 8, 'Hauts-de-France', 1);
INSERT INTO `cartes`.`regions` (`idregions`, `nomregion`, `id_pays`) VALUES ( 9, 'Bretagne', 1);
INSERT INTO `cartes`.`regions` (`idregions`, `nomregion`, `id_pays`) VALUES ( 10, 'Normandie', 1);
INSERT INTO `cartes`.`regions` (`idregions`, `nomregion`, `id_pays`) VALUES ( 11, 'Bourgogne-Franche-Comté', 1);

INSERT INTO base (cartes, annee, couleur, ville, campagne, mer, montagne, personnes, animaux, ete, hiver, automne, printemps, localite)
VALUES
('carte1', '1948', true, false, false, true, false, true, false, true, false, false, false, 1),
('carte2', '1948', false, false, true, false, true, false, false, false, true, false, false, 2),
('carte3', '1951', true, false, false, false, true, false, true, false, false, true, false, 4),
('carte4', '1996', false, true, false, false, true, false, true, false, false, false, true, 5),
('carte5', '2000', true, false, false, false, false, true, false, false, false, true, false, 9),
('carte6', '2011', false, true, false, false, false, true, false, true, false, false, false, 10),
('carte7', '1971', true, false, false, false, true, false, true, false, false, false, true, 18),
('carte8', '1914', false, false, false, true, false, false, true, false, false, true, false, 4),
('carte9', '1985', true, false, false, true, false, false, true, false, false, false, true, 20),
('carte10', '2022', false, true, false, false, true, false, false, false, true, false, false, 14),
('carte11', '1929', true, false, false, false, true, false, true, false, false, false, true, 14),
('carte12', '1913', false, true, false, true, false, false, false, true, false, false, false, 4),
('carte13', '1969', true, false, false, false, true, true, false, false, true, false, false, 5),
('carte14', '2010', false, false, false, false, true, true, false, false, false, true, false, 17),
('carte15', '1974', true, false, true, false, false, false, true, false, false, true, false, 16),
('carte16', '1942', false, true, false, true, false, false, true, false, false, false, true, 4),
('carte17', '2001', true, false, false, false, true, false, true, false, true, false, false, 2),
('carte18', '1966', false, false, true, false, false, true, false, false, false, true, false, 1),
('carte19', '1960', true, false, false, true, false, false, true, false, false, false, true, 7),
('carte20', '1955', false, true, false, false, true, false, false, false, true, false, false, 3);
