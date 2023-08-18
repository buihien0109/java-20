-- Create table If Not Exists example.Days (day date);
-- insert into Days (day) values ('2022-04-12');
-- insert into Days (day) values ('2021-08-09');
-- insert into Days (day) values ('2020-06-26');

SELECT DATE_FORMAT(day, "%W, %M %d, %Y") as day
from example.Days;

select customer_id
from Customers
where year = 2021 and revenue > 0;

-- Create table If Not Exists Problems (problem_id int, likes int, dislikes int);
-- Truncate table Problems;
-- insert into Problems (problem_id, likes, dislikes) values ('6', '1290', '425');
-- insert into Problems (problem_id, likes, dislikes) values ('11', '2677', '8659');
-- insert into Problems (problem_id, likes, dislikes) values ('1', '4446', '2760');
-- insert into Problems (problem_id, likes, dislikes) values ('7', '8569', '6086');
-- insert into Problems (problem_id, likes, dislikes) values ('13', '2050', '4164');
-- insert into Problems (problem_id, likes, dislikes) values ('10', '9002', '7446');

select problem_id
from example.Problems
where likes/(likes + dislikes) < 0.6
order by problem_id asc;

-- Create table If Not Exists Store (bill_id int, customer_id int, amount int);
-- Truncate table Store;
-- insert into Store (bill_id, customer_id, amount) values ('6', '1', '549');
-- insert into Store (bill_id, customer_id, amount) values ('8', '1', '834');
-- insert into Store (bill_id, customer_id, amount) values ('4', '2', '394');
-- insert into Store (bill_id, customer_id, amount) values ('11', '3', '657');
-- insert into Store (bill_id, customer_id, amount) values ('13', '3', '257');

select count(distinct customer_id) as rich_count
from example.Store
where amount > 500;


-- Create table If Not Exists Olympic (country varchar(50), gold_medals int, silver_medals int, bronze_medals int);
-- Truncate table Olympic;
-- insert into Olympic (country, gold_medals, silver_medals, bronze_medals) values ('China', '10', '10', '20');
-- insert into Olympic (country, gold_medals, silver_medals, bronze_medals) values ('South Sudan', '0', '0', '1');
-- insert into Olympic (country, gold_medals, silver_medals, bronze_medals) values ('USA', '10', '10', '20');
-- insert into Olympic (country, gold_medals, silver_medals, bronze_medals) values ('Israel', '2', '2', '3');
-- insert into Olympic (country, gold_medals, silver_medals, bronze_medals) values ('Egypt', '2', '2', '2');
-- insert into Olympic (country, gold_medals, silver_medals, bronze_medals) values ('Korea', '10', '10', '20');

select *
from example.Olympic
order by gold_medals desc, silver_medals desc, bronze_medals desc, country
