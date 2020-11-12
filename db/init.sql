CREATE TABLE bird_users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(60) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(200) NOT NULL
);

INSERT INTO bird_users (email, username, password)
VALUES ('birdLover@gmail.com', 'iLoveBirds', 'run');


CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    img VARCHAR(1000) NOT NULL,
    species_name VARCHAR(32),
    location VARCHAR(500),
    user_id INT REFERENCES bird_users(user_id)
);

INSERT INTO posts (img, species_name, location, user_id)
VALUES 
('https://nas-national-prod.s3.amazonaws.com/styles/hero_cover_bird_page/s3/sfw_fixed_01-29-2011-223.jpg?itok=BIR9fBhk', 'Blue Jay', 'Florida', 1),
('https://www.allaboutbirds.org/guide/assets/og/75217231-1200px.jpg', 'Woodhouses Scrub Jay', 'Utah', 1);


CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    body VARCHAR(1000),
    user_id INT REFERENCES bird_users(user_id),
    post_id INT REFERENCES posts(post_id)
);