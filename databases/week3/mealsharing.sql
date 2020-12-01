DROP DATABASE hyf_socialmedia;
CREATE DATABASE meal_sharing;
USE meal_sharing;

CREATE TABLE `meal` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` varchar(255) NOT NULL,
 `description` text NOT NULL,
 `location` varchar(255) NOT NULL,
 `when` datetime NOT NULL,
 `max_reservations` int(10) NOT NULL,
 `price` decimal NOT NULL,
 `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO meal 
VALUES (1, 'Lasagna', 'beef, onion, carrot, tomato', 'WA', '2020-06-30', 5, 4.95, '2020-06-01'),
	(2, 'Rice poriddge', 'rice, milk, cinamon, brown sugar', 'CA', '2020-06-20', 10, 2.95, '2020-05-31'),
    (3, 'Wok noodle', 'chicken, onion, carrot, bell pepper', 'CO', '2020-06-10', 10, 3.95, '2020-05-30');
    
INSERT INTO meal 
VALUES (5, 'Waffel', 'flour, milk, egg, butter, sugar', 'MI', '2020-06-27', 8, 2.95, '2020-06-05'),
	(6, 'Pizza', 'dough, tomato, salami, cheese, onion', 'CI', '2020-06-11', 6, 5.95, '2020-05-29'),
    (7, 'Curry and rice', 'chicken, onion, carrot, potato', 'UT', '2020-06-05', 8, 4.95, '2020-05-28'),
    (8, 'Vegan sushi', 'avocado, cucumber, soy sauce, rice, seaweed', 'NY', '2020-06-18', 2, 5.95, '2020-05-025'),
	(9, 'Chocolate cake', 'flour, chocolate, sugar, butter, egg', 'NJ', '2020-06-07', 6, 6.95, '2020-05-23'),
    (10, 'Bread', 'flour, egg, salt, yest', 'DC', '2020-06-13', 6, 4.95, '2020-05-22');

-- Meal queries

-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO meal 
VALUES (4, 
		'tomato soup', 
        'tomato, onion, carrot, bacon', 
        'TX', 
        '2020-06-5', 
        6, 
        1.95, 
        '2020-05-25');

-- Get a meal with any id, fx 1
SELECT * FROM meal WHERE id = 3;

-- Update a meal with any id, fx 1. Update any attribute 
-- fx the title or multiple attributes
UPDATE meal SET max_reservations = 10 WHERE id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE id = 2;


CREATE TABLE `reservation` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `number_of_guests` int(10) NOT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `location` varchar(255) NOT NULL,
 `created_date` datetime NOT NULL,
 CONSTRAINT `fk_reservation_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO reservation 
VALUES (1, 4, 1, 'WA', '2020-06-01'),
	(2, 6, 2, 'CA', '2020-05-31'),
    (3, 2, 3, 'CO', '2020-05-30');
    
INSERT INTO reservation 
VALUES (5, 4, 5, 'CO', '2020-05-28'),
	(6, 6, 6, 'LA', '2020-05-22'),
    (7, 2, 7, 'UT', '2020-05-26'),
    (8, 4, 8, 'PX', '2020-05-23'),
	(9, 6, 9, 'MI', '2020-05-15'),
    (10, 2, 10, 'NJ', '2020-05-17');
    
-- Reservation queries

-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation
VALUES (4, 4, 4, 'PX', '2020-05-25');

-- Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id = 1;

-- Update a reservation with any id, 
-- fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET meal_id = 1 WHERE meal_id = 4;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id = 1;

CREATE TABLE `review` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title`  varchar(255) NOT NULL,
 `description` text NOT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `stars` int(10) NOT NULL,
 `created_date` datetime NOT NULL,
 CONSTRAINT `fk_review_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO review 
VALUES (1, 'Ordered Lasagna', 'tasty and and enough for 4 ppl', 1, 5, '2020-06-01'),
	(2, 'We had Rice poriddge', 'perfect for a small party as a dessert', 2, 4, '2020-05-31'),
    (3, 'Wok noodle was tasty', 'good for busy week night dinner', 3, 4, '2020-05-30');
    
INSERT INTO review 
VALUES (5, 'Waffel', 'tasty and and enough for 4 ppl', 5, 3, '2020-06-01'),
	(6, 'Pizza', 'ordered for a party and big enough', 6, 4, '2020-05-31'),
    (7, 'Curry', 'delicious japanese curry', 7, 4, '2020-05-30'),
    (8, 'Sushi', 'healthy and enviromental friendly', 8, 5, '2020-06-01'),
	(9, 'Cake', 'not too sweet', 9, 4, '2020-05-31'),
    (10, 'Bread', 'tasty home made bread', 10, 5, '2020-05-30');

-- Review queries

-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review 
VALUES (4, 'Great wok so far', 'tasty and cheap', 3, 4, '2020-05-31');

-- Get a review with any id, fx 1
SELECT * FROM review WHERE id = 4;

-- Update a review with any id, 
-- fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET starts = 3 WHERE id = 4;

-- Delete a review with any id, fx 1
DELETE FROM review WHERE id = 3;

-- Additional queries

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE price <= 5;

-- Get meals that still has available reservations
SELECT * FROM reservation 
JOIN meal
	ON meal.id = meal_id
WHERE number_of_guests < max_reservations;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
-- I changed it to description instead.
SELECT * FROM meal WHERE description LIKE '%tomato%';

-- Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2020-05-25' AND '2020-05-26';

-- Get only specific number of meals fx return only 5 meals
-- get 7 result not 5 limits
SELECT COUNT(title) FROM meal WHERE created_date BETWEEN '2020-05-01' AND '2020-05-31' LIMIT 5;

-- Get the meals that have good reviews
SELECT * FROM meal 
JOIN review
	ON meal.id = review.meal_id
WHERE starts >= 4;

-- Get reservations for a specific meal sorted by created_date
-- dont understand the q
SELECT meal.title FROM reservation
JOIN reservation r
	ON meal.created_date = r.created_date
WHERE r.created_date >= '2020-05-30'
ORDER BY r.created_date; 

-- Sort all meals by average number of stars in the reviews
SELECT AVG(starts) FROM meal
JOIN review
	ON meal.id = r.meal_id
GROUP BY meal.title;