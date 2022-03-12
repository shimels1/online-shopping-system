-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ds
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `item` (
  `iditem` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(145) DEFAULT NULL,
  `catagory` varchar(145) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `discription` longtext,
  `date` varchar(45) DEFAULT NULL,
  `rating` varchar(45) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `imageURL` varchar(245) DEFAULT NULL,
  PRIMARY KEY (`iditem`),
  UNIQUE KEY `title_UNIQUE` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (41,'LG TV 48\"','Electronics',50000,'This is LG tv  ','1/2/2020','5',60,'lgtv.jpg'),(44,'LG FREDG 48\"','Electronics',30000,'This is LG fredg  ','1/2/2020','5',30,'lgf.jpg'),(45,'Red woin','drink',200,'This is red woin  ','1/2/2020','5',100,'reft.jpg'),(46,'Agge','frute',8,'This is agge ','1/2/2020','5',3000,'agge.jpg'),(48,'Apple','frute',90,'This is Apple  ','1/2/2020','5',90,'apple.jpg'),(49,'T-Shert','cloth',500,'This is t-shert  ','1/2/2020','5',60,'tshert.png'),(55,'Banana','frute',40,'This is banana  ','1/2/2020','5',60,'banana.jpg'),(67,'White woin','drink',200,'This is red woin  ','1/2/2020','5',100,'reft.jpg');
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `order` (
  `idorder` int(11) NOT NULL AUTO_INCREMENT,
  `address` text,
  `phone` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `customerId` varchar(45) DEFAULT NULL,
  `respond` varchar(45) DEFAULT 'false',
  PRIMARY KEY (`idorder`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (84,'bole rode','918332255','2020-01-28 14:05:53','222','false');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderitem`
--

DROP TABLE IF EXISTS `orderitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orderitem` (
  `idorderItem` int(11) NOT NULL AUTO_INCREMENT,
  `orderID` varchar(45) DEFAULT NULL,
  `itemId` varchar(45) DEFAULT NULL,
  `quantity` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idorderItem`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderitem`
--

LOCK TABLES `orderitem` WRITE;
/*!40000 ALTER TABLE `orderitem` DISABLE KEYS */;
INSERT INTO `orderitem` VALUES (127,'83','49','1'),(128,'84','44','1'),(129,'84','41','1');
/*!40000 ALTER TABLE `orderitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `phone` varchar(45) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `balance` float DEFAULT NULL,
  `role` varchar(45) DEFAULT 'customer',
  PRIMARY KEY (`iduser`,`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (11,'abebe','kasa','111','111',0,'admin'),(16,'abebe','kasa','222','222',0,'customer'),(17,'bezawit','alemu','333','333',0,'customer'),(18,'eyob','abele','444','444',0,'clerk'),(19,'ggk','kkk','777','777',0,'customer'),(20,'henok','abebe','96775454','1234',0,'clerk'),(21,'helen','abebe','911111111','1234',0,'clerk');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'ds'
--

--
-- Dumping routines for database 'ds'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-28 15:02:04
