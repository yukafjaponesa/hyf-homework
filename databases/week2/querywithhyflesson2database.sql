-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title 
FROM task
JOIN user_task ut  -- has user_id, task_id
	ON task.id = task_id  -- need primary key and fk key to join. task.id from task
JOIN user          -- has id, name, email, phone
	ON user.id = ut.user_id  -- need a primary key for user. ut has user_id, task_id
WHERE email LIKE '%@spotify.com';


-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title 
FROM task 
JOIN user_task ut
	ON task.id = task_id
JOIN user
	ON user.id = ut.user_id
WHERE name = 'Donald Duck' AND task.status_id = 1;

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.title 
FROM task 
JOIN user_task ut
	ON task.id = task_id
JOIN user
	ON user.id = ut.user_id    
WHERE name = 'Maryrose Meadows' AND month(created) = 9;

-- Find how many tasks where created in each month, 
-- e.g. how many tasks were created in october, 
-- how many tasks were created in november, etc. (hint: use group by)
SELECT COUNT(*) 
FROM task
GROUP BY '2017-10-01';

SELECT COUNT(*) 
FROM task
GROUP BY '2017-11-01';
