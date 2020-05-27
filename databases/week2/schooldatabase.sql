-- USE school_database;  choose which database to use
CREATE TABLE `Class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL, 
  `begins_date` varchar(255) NOT NULL,
  `ends_date` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `Student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,  
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL, -- primary key and fk key must have unsigned
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE -- fk: foreign key
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
