use day_03;

-- 1. Thiết lập mối quan hệ 1-n giữa Person và Post với khóa ngoại authorId như hướng dẫn
-- 2. Hiển thị các bài Post được viết trong tháng 9
select *
from Post
where month(createdAt) = 9;

-- 3. Hiển thị các bài Post có title chứa 'nam'
select *
from Post
where title like '%nam%';

-- 4. Hiển thị các bài Post có content ko chứa @
select *
from Post
where content not like '%@%';

-- 5. Hiển thị fullname , title, content của các Person ở Viet nam
select pe.fullname, po.title, po.content, po.createdAt
from Person pe
inner join Post po
on pe.id = po.authorId
where pe.country = 'Vietnam';

-- 6. Hiển thị fullname , title, content của các Person không ở Viet nam
select pe.fullname, po.title, po.content, po.createdAt
from Person pe
inner join Post po
on pe.id = po.authorId
where pe.country != 'Vietnam';

-- 7. Hiển thị các bài viết của Person ở Mexico được tạo trong năm 2022
select *
from Post po
inner join Person pe
on po.authorId = pe.id
where pe.country = 'Vietnam' and year(po.createdAt) = 2004;

-- 8. Hiển thị thông tin người dùng và bài post được tạo trong ngày 12/01/2023
select *
from Post po
inner join Person pe
on po.authorId = pe.id
where cast(po.createdAt as date) = '2004-09-01';

-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
-- 1. Hiển thị các bài viết của Person làm nghề Programmer được tạo sau ngày 01/01/2023
select *
from Post po
inner join Person pe
on po.authorId = pe.id
where pe.job = 'Programmer' and po.createdAt > '2003-01-01';

-- 2. Tính tổng số lượng bài Post trong năm 2022
select count(id)
from Post
where year(createdAt) = 2022;

-- 3. Hiển thị thông tin người dùng có bài Post trong năm 2022
select distinct pe.*
from Post po
inner join Person pe
on po.authorId = pe.id
where year(createdAt) = 2022;

-- 4. Hiển thị thông tin người dùng và title bài Post của 3 bài post mới nhất
select pe.*, po.title, po.createdAt
from Post po
inner join Person pe
on po.authorId = pe.id
order by po.createdAt desc
limit 3;

-- 5. Thống kê số lượng bài Post của từng người
select pe.fullname, count(po.id) as total_post
from Post po
inner join Person pe
on po.authorId = pe.id
group by po.authorId;

-- 6. Thống kê số lượng bài Post của những người ở China
select pe.fullname, count(po.id) as total_post
from Post po
inner join Person pe
on po.authorId = pe.id
where pe.country = 'China'
group by po.authorId;

-- 7. Thống kê số lượng bài Post của những người có sở thích Swimming trong năm 2023
select pe.fullname, count(po.id) as total_post
from Post po
inner join Person pe
on po.authorId = pe.id
where pe.hobbies = 'Swimming'
group by po.authorId;

-- 8. Tìm kiếm tháng có nhiều bài post nhất trong năm 2023
select month(createdAt) as month_name, count(id) as count
from Post
where year(createdAt) = 2023
group by month(createdAt)
order by count(id) desc;

-- 9. Tìm kiếm năm có ít bài post nhất
select year(createdAt) as year_name, count(id) as count
from Post
group by year(createdAt)
order by count(id) desc;

-- 10. Tìm kiếm năm có nhiều bài post nhất

-- 11. Hiển thị thông tin người dùng có nhiều bài post nhất trong năm 2023
select pe.fullname, count(po.id)
from Post po
inner join Person pe
on po.authorId = pe.id
where year(po.createdAt) = 2023
group by po.authorId
order by count(po.id) desc;

-- 12. Hiển thị thông tin những người dùng có nhiều hơn 2 bài post trong năm 2022
select pe.fullname, count(po.id)
from Post po
inner join Person pe
on po.authorId = pe.id
where year(po.createdAt) = 2019
group by po.authorId
having count(po.id) > 1
order by count(po.id) desc;