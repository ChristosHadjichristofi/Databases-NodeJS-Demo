/*
Navicat MySQL Data Transfer

Source Server         : db-project-demo
Source Server Version : 80022
Source Host           : localhost:3306
Source Database       : db-project-demo

Target Server Type    : MYSQL
Target Server Version : 80022
File Encoding         : 65001

Date: 2022-03-03 14:01:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for grades
-- ----------------------------
DROP TABLE IF EXISTS `grades`;
CREATE TABLE `grades` (
  `id` int NOT NULL,
  `course_name` varchar(45) NOT NULL,
  `grade` int NOT NULL,
  `student_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `student_id` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of grades
-- ----------------------------
INSERT INTO `grades` VALUES ('1', 'PAC', '87', '1');
INSERT INTO `grades` VALUES ('2', 'SHO', '93', '1');
INSERT INTO `grades` VALUES ('3', 'PAS', '82', '1');
INSERT INTO `grades` VALUES ('4', 'DRI', '88', '1');
INSERT INTO `grades` VALUES ('5', 'DEF', '34', '1');
INSERT INTO `grades` VALUES ('6', 'PHY', '75', '1');
INSERT INTO `grades` VALUES ('7', 'PAC', '85', '2');
INSERT INTO `grades` VALUES ('8', 'SHO', '92', '2');
INSERT INTO `grades` VALUES ('9', 'PAS', '91', '2');
INSERT INTO `grades` VALUES ('10', 'DRI', '95', '2');
INSERT INTO `grades` VALUES ('11', 'DEF', '34', '2');
INSERT INTO `grades` VALUES ('12', 'PHY', '65', '2');

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES ('1', 'Cristiano', 'Ronaldo', 'cr7@mail.com');
INSERT INTO `students` VALUES ('2', 'Lionel', 'Messi', 'lm10@mail.com');
INSERT INTO `students` VALUES ('3', 'Pedro', 'Wilkinson', 'Salma74@yahoo.com');
INSERT INTO `students` VALUES ('4', 'Lana', 'Larkin', 'Dale_Jast@yahoo.com');
INSERT INTO `students` VALUES ('5', 'Daniel', 'Kovacek', 'Janelle_Anderson@gmail.com');
INSERT INTO `students` VALUES ('6', 'Stewart', 'Botsford', 'Delaney4@yahoo.com');
INSERT INTO `students` VALUES ('7', 'Charlotte', 'Shanahan', 'Damon_Cremin@yahoo.com');
INSERT INTO `students` VALUES ('8', 'Pete', 'Bauch', 'Aisha55@yahoo.com');
INSERT INTO `students` VALUES ('9', 'Lori', 'Baumbach', 'Jude8@yahoo.com');
INSERT INTO `students` VALUES ('10', 'Ignacio', 'Kuhn', 'Shea_Hayes@hotmail.com');
INSERT INTO `students` VALUES ('11', 'Marsha', 'O\'Kon', 'Brigitte.Macejkovic@gmail.com');
INSERT INTO `students` VALUES ('12', 'Lora', 'Mann', 'Orland_Welch@hotmail.com');
SET FOREIGN_KEY_CHECKS=1;
