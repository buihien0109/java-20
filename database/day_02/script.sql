-- 1. Lấy toàn bộ bản ghi
SELECT * FROM example.Person;

select id, fullname as name
from Person;

select p.id, p.fullname, p.country
from Person p;

SELECT * FROM Person WHERE country = 'Vietnam';

SELECT * FROM Person ORDER BY salary DESC;

SELECT * 
FROM Person 
ORDER BY salary DESC
LIMIT 5;

SELECT * 
FROM Person 
ORDER BY salary ASC
LIMIT 5;

SELECT * 
FROM Person 
ORDER BY salary DESC
LIMIT 5
OFFSET 5;

-- 1. Lấy ds person có giới tính 'Nữ' và sở thích là 'Yoga' và sắp xếp theo 'birthday' giảm dần
select *
from Person
where gender = 'F' and hobbies = 'Yoga'
order by birthday desc;

-- 2. Lấy ds person có fullname bắt đầu = 'A' (LIKE)
select *
from Person
where fullname like 'A%';

-- 3. Lấy ds person có fullname kết thúc = 'n' (LIKE)
select *
from Person
where fullname like '%n';

-- 4. Lấy ds person có chứa 'mo' ở trong fullname (LIKE)
select *
from Person
where fullname like '%mo%';

-- 5. Lấy ds person có giới tính nữ và sắp xếp theo salary giảm dần
select *
from Person
where gender = 'F'
order by salary desc;

-- 6. Lấy ds person có sở thích thuộc 1 trong các sở thích sau 'Yoga', 'Writing', 'Cooking' (IN)
select *
from Person
where hobbies in ('Yoga', 'Writing', 'Cooking');

-- 7. Lấy ra 3 người già nhất trong danh sách (tính theo birthday)
select *
from Person
order by birthday asc
limit 3;

-- 8. Lấy ds person không thuộc các nghề sau 'Pilot', 'Writter', 'Musicican' (NOT IN)
select *
from Person
where job not in ('Pilot', 'Writter', 'Musicican');

-- 9. Lấy ds person có range salary từ 5000 -> 7000 (BETWEEN hoặc kết hợp với AND)
select *
from Person
where salary between 5000 and 7000;

-- 10. Kiểm tra 1 person có fullname = 'Gerry Swaysland' có tồn tại trong table hay không?
select *
from Person
where fullname = 'Gerry Swaysland';

select *
from Person
where exists (
	select 1
	from Person
	where fullname = 'Gerry Swaysland'
);

-- Liệt kê các job có trong bảng
select distinct job
from Person;

-- Đếm số lượng job trong bảng
select count(distinct job) as job_total
from Person;

-- Tính level salary dựa trên giá trị salary
select *, 
	CASE
		WHEN salary <= 1000 THEN 'Thấp'
        WHEN salary <= 3000 THEN 'Trung bình'
        WHEN salary <= 7000 THEN 'Cao'
        ELSE 'Rất cao'
    END as salary_level
from Person;

-- 1. Lấy thông tin id, fullname, gender. Nếu gender = 'M' -> 'Nam', 'F' -> 'Nữ'
select id, fullname, if(gender = 'M', 'Nam', 'Nữ') as gender_detail
from Person;

-- 2. Lấy thông tin id, fullname, birthday. Và tính toán age của person cho đến năm hiện tại, hiển thị ở trường 'age'
-- Nếu age < 18 -> thêm cột detail với giá trị 'Trẻ con'
-- Nếu age < 55 -> thêm cột detail với giá trị 'Trường thành'
-- Nếu age > 55 -> thêm cột detail với giá trị 'Già'
select id, fullname, birthday, year(curdate()) - year(birthday) as age,
case
	when year(curdate()) - year(birthday) < 30 then 'Trẻ con'
    when year(curdate()) - year(birthday) < 55 then 'Trường thành'
    else 'Già'
end as detail
from Person;

-- 3. Đếm số lượng người có age > 45 (COUNT)
select count(*)
from Person
where (year(curdate()) - year(birthday)) > 45;

-- 4. Ở đất nước có tên là 'China' hiện có bao nhiêu người sinh sống (COUNT)
select count(*) as total
from Person
where country = 'China';

-- 5. Lấy ds person có salary > salary trung bình (AVG)
select *
from Person
where salary > (select avg(salary)from Person);

select *
from Person
where id in (
	select id
	from Person
	where salary > (select avg(salary) from Person)
);

select *
from Person
where id not in (
	select id
	from Person
	where salary <= (select avg(salary) from Person)
);






