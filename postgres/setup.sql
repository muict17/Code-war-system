CREATE DATABASE codewar;

USE codewar;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  student_id INTEGER NOT NULL,
  username VARCHAR(64) NOT NULL,
  password BINARY(40) NOT NULL,
  is_verified DEFAULT 0,
  score DEFAULT 0,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
