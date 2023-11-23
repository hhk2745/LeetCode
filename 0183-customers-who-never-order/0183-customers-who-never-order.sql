# Write your MySQL query statement below
# select c.name Customers
# from Customers c
# left join Orders o
# on c.id = o.customerId
# where o.customerId is null



select name Customers
from Customers
where id not in (
    select customerId
    from Orders
)
