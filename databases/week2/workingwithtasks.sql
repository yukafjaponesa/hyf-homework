/*CREATE TABLE `tasks` (
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,  -- 255 is the max number you can store
  `created` varchar(255) NOT NULL,
  `updated` varchar(255) NULL,
  `due_date` varchar(255) NULL,
  `status_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- char(100) take 100 characters of stored spaces.
*/

INSERT INTO task (
	title, 
	description, 
	created, 
	updated, 
	due_date, 
	status_id)
VALUES(
	'homework',
    'database week2',
    '2020-05-24',
    '2020-05-25',
    '2020-05-27',
    2
    );

UPDATE task SET title = 'homework week2' WHERE id = 12;
UPDATE task SET due_date = '2020-05-26' WHERE id = 12;
UPDATE task SET status_id = 1 WHERE id = 1;
UPDATE task SET status_id = 3 WHERE id = 12;
DELETE FROM task WHERE id = 12;  -- user_id 12 might have more than 1 task so need to specify which task to delete

