--
-- @lc app=leetcode id=181 lang=mysql
--
-- [181] Employees Earning More Than Their Managers
--

-- @lc code=start
-- TODO: テーブル名変更 Nameから Employee へ
# Write your MySQL query statement below
select e1.Name
from Employee e1 inner join Employee e2
on e1.ManagerId = e2.id
where e1.Salary > e2.Salary;
-- @lc code=end

