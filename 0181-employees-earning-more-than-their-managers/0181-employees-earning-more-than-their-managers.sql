# Write your MySQL query statement below
SELECT e.name Employee
FROM Employee e
inner join Employee m
on e.managerId = m.id
where e.salary > m.salary