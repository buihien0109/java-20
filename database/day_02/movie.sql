-- SELECT * FROM example.movie;

-- 1. Tính toán rating trung bình cho mỗi thể loại (genre, average_rating)
-- 2. Đếm số lượng phim trong mỗi ngôn ngữ (language, movie_count)
-- 3. Tính tổng ngân sách chi cho các bộ phim của mỗi đạo diễn (director, total_budget)
-- 4. Đếm số lượng phim phát hành trong mỗi năm (release_year, movie_count)
-- 5. Tìm xếp hạng cao nhất và thấp nhất cho mỗi đạo diễn (director, highest_rating, lowest_rating)
-- 6. Tính tổng ngân sách và xếp hạng trung bình cho từng ngôn ngữ (language, total_budget, average_rating)
-- 7. Tìm thể loại có xếp hạng trung bình trên 8,0 (genre, average_rating)
-- 8. Tìm những đạo diễn đã làm ít nhất 5 bộ phim (director, movie_count)
-- 9. Tìm các ngôn ngữ có tổng ngân sách cao hơn 1 tỷ đô la và xếp hạng trung bình trên 7,5 (language, total_budget, average_rating)
-- 10. Tìm những đạo diễn đã làm phim ở ít nhất hai thể loại khác nhau (director, genre_count)

-- CREATE TABLE example.Customer (
--   customer_id INT PRIMARY KEY,
--   customer_name VARCHAR(100)
-- );

-- INSERT INTO example.Customer (customer_id, customer_name) VALUES
--   (1, 'John'),
--   (2, 'Emily'),
--   (3, 'Michael');

-- CREATE TABLE example.Orders (
--   order_id INT PRIMARY KEY,
--   customer_id INT,
--   order_amount DECIMAL(10, 2)
-- );

-- INSERT INTO example.Orders (order_id, customer_id, order_amount) VALUES
--   (1, 1, 100),
--   (2, 1, 200),
--   (3, 2, 150),
--   (4, 2, 300),
--   (5, 3, 250);
--   

SELECT customer_id, SUM(order_amount) AS total_amount,
  (SELECT COUNT(*) 
   FROM Orders o2 
   WHERE o2.customer_id = o.customer_id) AS order_count
FROM Orders o
GROUP BY customer_id;

SELECT customer_id, SUM(order_amount) AS total_amount, COUNT(order_id) AS order_count
FROM Orders o
GROUP BY customer_id;

SELECT c.customer_id, c.customer_name, SUM(o.order_amount) AS total_amount,
  (SELECT COUNT(*) 
   FROM Orders o2 
   WHERE o2.customer_id = o.customer_id) AS order_count
FROM Customer c
JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id;

SELECT c.customer_id, c.customer_name, SUM(o.order_amount) AS total_amount, COUNT(o.order_id) AS order_count
FROM Customer c
JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id;