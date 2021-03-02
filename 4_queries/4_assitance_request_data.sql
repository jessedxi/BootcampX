SELECT teachers.name as teacher, students.name as student, assignments.name, (assistance_requests.completed_at - assistance_requests.started_at) as duration
FROM teachers 
JOIN assistance_requests on teachers.id = teacher_id
LEFT JOIN assignments on assignments.id = assignment_id
JOIN students on students.id = student_id
ORDER BY (assistance_requests.completed_at - assistance_requests.started_at);
