/*CREATE TABLE `Staff` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,  
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL, 
  `office_id` int(10) NOT NULL,
  `department_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
*/

INSERT INTO Staff (id, name, email, phone, office_id, department_id)  
VALUES -- (1, 'John', 'john@dk.com', '12345', 1, 1),
		(2, 'Lisa', 'lisa@dk.com', '12346', 2, 2),
        (3, 'Louise', 'louise@dk.com', '12347', 3, 3);

/*
CREATE TABLE `Office` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `staff_id` int(10) unsigned NOT NULL,  -- primary key and fk key must have unsigned
  `location` varchar(255) NOT NULL, 
  `phone` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_class` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`) ON DELETE CASCADE ON UPDATE CASCADE 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
*/

INSERT INTO Office (id, staff_id, location, phone)  
VALUES -- (1, 1, 'Vesterbro', '98766'),
		(2, 2, 'Norrebro', '98764'),
        (3, 3, 'Osterbro', '98763');

/*
CREATE TABLE `Department` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `staff_id` int(10) unsigned NOT NULL,
  `department` varchar(255) NOT NULL, 
  `domestic_number` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `Department_staff_id` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`) ON DELETE CASCADE ON UPDATE CASCADE 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
*/

INSERT INTO Department (id, staff_id, department, domestic_number)  
VALUES -- (1, 1, 'HR', '135'),
		(2, 2, 'IT', '246'),
        (3, 3, 'PR', '357');
 