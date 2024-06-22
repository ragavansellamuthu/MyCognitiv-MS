CREATE DATABASE  IF NOT EXISTS `mycognitiv_candidate` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mycognitiv_candidate`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: mycognitiv_candidate
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `candidate`
--

DROP TABLE IF EXISTS `candidate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidate` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `created_by` bigint NOT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `deleted_by` bigint NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `modified_at` datetime(6) DEFAULT NULL,
  `modified_by` bigint NOT NULL,
  `age` int NOT NULL,
  `batch_id` bigint NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile_number` bigint NOT NULL,
  `name` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidate`
--

LOCK TABLES `candidate` WRITE;
/*!40000 ALTER TABLE `candidate` DISABLE KEYS */;
INSERT INTO `candidate` VALUES (1,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,25,1,'arun.kumar@example.com',9000000001,'Arun Kumar','password1'),(2,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,26,1,'vara.chidambaram@example.com',9000000002,'Vara Chidambaram','password2'),(3,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,27,1,'pavan.selvan@example.com',9000000003,'Pavan Selvan','password3'),(4,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,28,1,'krishna.raja@example.com',9000000004,'Krishna Raja','password4'),(5,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,29,1,'suresh.sankar@example.com',9000000005,'Suresh Sankar','password5'),(6,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,30,1,'mohan.balaji@example.com',9000000006,'Mohan Balaji','password6'),(7,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,31,1,'adithya.govindan@example.com',9000000007,'Adithya Govindan','password7'),(8,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,32,1,'harini.sat@example.com',9000000008,'Harini Sat','password8'),(9,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,33,1,'sudha.iruvar@example.com',9000000009,'Sudha Iruvar','password9'),(10,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,34,1,'darini.siva@example.com',9000000010,'Darini Siva','password10'),(11,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,25,1,'varun.kumar@example.com',9000000011,'Varun Kumar','password11'),(12,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,26,1,'raji.kartik@example.com',9000000012,'Raji Kartik','password12'),(13,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,27,1,'parvathi.venkatesan@example.com',9000000013,'Parvathi Venkatesan','password13'),(14,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,28,1,'deepa.mohan@example.com',9000000014,'Deepa Mohan','password14'),(15,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,29,1,'sankar.mahalingam@example.com',9000000015,'Sankar Mahalingam','password15'),(16,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,30,1,'varadan.selvan@example.com',9000000016,'Varadan Selvan','password16'),(17,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,31,1,'raj.ramesh@example.com',9000000017,'Raj Ramesh','password17'),(18,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,32,1,'mohan.krishna@example.com',9000000018,'Mohan Krishna','password18'),(19,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,33,1,'vinay.sadagopan@example.com',9000000019,'Vinay Sadagopan','password19'),(20,'2024-06-23 10:00:00.000000',1,NULL,0,_binary '\0','2024-06-23 10:00:00.000000',1,34,1,'raja.selva@example.com',9000000020,'Raja Selva','password20');
/*!40000 ALTER TABLE `candidate` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-22 11:48:03
