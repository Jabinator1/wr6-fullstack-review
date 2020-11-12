# WR6 Fullstack Planning

## MVP
- Users can add bird pictures to database
- Users can create an account
- Users can login to the website
- Users can view bird pics from our database
- Users can edit/delete their own posts

## Icebox
- Users can comment on other users' posts
- Users can upvote/like posts
- Users can view locations of bird sightings using Google Maps API
- Users can create a friendslist 
- Can view individual profiles (including your own)

### Database

#### Schemas: 
- users
```SQL
CREATE TABLE bird_users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(60) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(50) NOT NULL
);
```
- posts
```SQL
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    img VARCHAR(1000) NOT NULL,
    species_name VARCHAR(32),
    location VARCHAR(500),
    user_id INT REFERENCES bird_users(user_id)
);
```
- comments
```SQL
CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    body VARCHAR(1000),
    user_id INT REFERENCES bird_users(user_id),
    post_id INT REFERENCES posts(post_id)
);
```
### Server
- Dependencies
    - express
    - massive
    - dotenv
    - express-session
    - bcrypt

- File Structure:
    - server/
        - index.js
        - controllers/
            - authController.js
            - postController.js
            - commentController.js

- Endpoints:
    - auth endpoints:
        - register => '/auth/register/
        - login => '/auth/login'
        - logout => '/auth/logout'
        - getUserSession => '/api/get_user/'

    - post endpoints:
        - read posts => '/api/posts'
        - delete => '/api/posts/:id'
        - edit => '/api/posts/:id'
        - create => '/api/posts

### Frontend

- Dependencies
    - axios
    - react-router-dom
    - redux
    - react-redux
    - redux-promise-middleware

- File Structure:
    - src/
        - index.js
        - App.js
            - '/' => auth.js
            - '/createpost' => Form.js
            - '/feed' => Feed.js
        - App.css
        - reset.css
        - redux/
            - store.js
            - reducer.js
        - components/
            - Header.js
            - Auth.js
            - Form.js
            - Feed.js
            - Post.js

<a href="https://github.com/Jabinator1/wr6-fullstack-review.git">Wireframe</a>