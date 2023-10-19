-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ticketpro_db
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'cine','2023-10-19 18:24:29','2023-10-19 18:24:29'),(2,'show','2023-10-19 18:24:29','2023-10-19 18:24:29'),(3,'teatro','2023-10-19 18:24:29','2023-10-19 18:24:29'),(4,'streaming','2023-10-19 18:24:29','2023-10-19 18:24:29'),(5,'festival','2023-10-19 18:24:29','2023-10-19 18:24:29');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Nenagenix',2000,'XLR Club - San Miguel, Sabado 01 de Septiembre 19:00 Hs',10,'2023-09-01 00:00:00',' Tribulato','San Miguel','1693866702262_products_.jpg',2,3,'2023-10-19 18:24:29','2023-10-19 18:24:29','2023-10-19 18:24:29'),(2,'Palito Ortega',12000,'Auditorio Ángel Bustelo - Mendoza, Viernes 17 de Noviembre 22:00 Hs',10,'2023-11-17 00:00:00',' Mtro. Joaquín González 40','Mendoza','1693866730867_products_.webp',2,2,'2023-10-19 18:24:29','2023-10-19 18:24:29','2023-10-19 18:24:29'),(3,'VIRUS',22000,'Mood Live, NQN - Sábado 16 de Septiembre - 21:00hs',10,'2023-09-16 00:00:00',' Mtro. Joaquín González 40','Neuquen','1693866781825_products_.webp',2,4,'2023-10-19 18:24:29','2023-10-19 18:24:29','2023-10-19 18:24:29'),(4,'Axel',10000,'Teatro Sarmiento - San Juan, 16 de Noviembre - 22.00 hs',10,'2023-09-16 00:00:00',' Av. Leandro N. Alem Norte 1','San Juan','1693867671364_products_.webp',2,4,'2023-10-19 18:24:29','2023-10-19 18:24:29','2023-10-19 18:24:29'),(5,'Bach: obra completa',0,'Centro Cultural Kirchner - CABA, 16 de Noviembre - 22.00 hs',0,'2023-11-16 00:00:00','Sarmiento 151','CABA','1693866853852_products_.jpg',3,1,'2023-10-19 18:24:29','2023-10-19 18:24:29','2023-10-19 18:24:29'),(6,'Cuarteto de nos',10000,'Estadio GEI - Ituzaingo, 5 de Octubre - 19.00 hs',15,'2023-10-05 00:00:00','Alvear 1106','Ituzaingo','1693867795408_products_.webp',2,2,'2023-10-19 18:24:29','2023-10-19 18:24:29','2023-10-19 18:24:29'),(7,'Puro Diseño',4500,'Feria puro Diseño La Rural - Palermo, 1,2 y 3 de Septiembre - 21.00 hs',10,'2023-09-01 00:00:00','Av. Sarmiento 2704','Ituzaingo','1693867825508_products_.jpg',5,3,'2023-10-19 18:24:29','2023-10-19 18:24:29','2023-10-19 18:24:29'),(8,'Barbie',800,'Teatro Seminari - Escobar, 30 de Agosto - 13.00 hs',10,'2023-08-30 00:00:00','Mitre 451','Escobar','1693867850518_products_.webp',1,3,'2023-10-19 18:24:29','2023-10-19 18:24:29','2023-10-19 18:24:29'),(9,'Hilda',5500,'Teatro Seminari - Escobar, 08 de Septiembre - 21.30 hs',10,'2023-09-08 00:00:00','Mitre 451','Escobar','1693867876962_products_.webp',1,4,'2023-10-19 18:24:29','2023-10-19 18:24:29','2023-10-19 18:24:29'),(10,'Fest. Bandera',15000,'Ex rural - Rosario, 7 de Octubre - 14.30 hs',10,'2023-10-07 00:00:00','Mitre 451','Rosario','1693867953407_products_.webp',NULL,NULL,'2023-10-19 18:24:29','2023-10-19 18:24:29','2023-10-19 18:24:29');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador','2023-10-19 18:24:29','2023-10-19 18:24:29'),(2,'Usuario','2023-10-19 18:24:29','2023-10-19 18:24:29');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'Gratis','2023-10-19 18:24:29','2023-10-19 18:24:29'),(2,'Nuevo','2023-10-19 18:24:29','2023-10-19 18:24:29'),(3,'Agotado','2023-10-19 18:24:29','2023-10-19 18:24:29'),(4,'Disponible','2023-10-19 18:24:29','2023-10-19 18:24:29');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20231011192136-create-sections.js'),('20231011192511-create-category.js'),('20231011194020-create-products.js'),('20231018061856-create-role.js'),('20231018062145-create-user.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','TicketPro','admin@gmail.com','$2a$10$Xb8aoQU3jJJ8lz2xV8RBp.jd4smkyjheeIzbSDMuakwsBo4IIclRu',1,'2023-10-19 18:24:29','2023-10-19 18:24:29'),(2,'Patricio','Frascaroli','pmfrascaroli@gmail.com','$2a$10$BOuG7FuVjrq/o/7cNbbLhO.pJdU9nFnX14h3uKOugIe2qnjWYF9l2',2,'2023-10-19 18:24:29','2023-10-19 18:24:29');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-19 16:41:05
