SELECT p.post_id, p.img, p.species_name, p.location, p.user_id, uid.username FROM posts p
JOIN bird_users uid ON uid.user_id = p.user_id
ORDER BY p.post_id DESC;