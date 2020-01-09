-- USE codewar;
\c codewar;
CREATE TABLE roles(
  role_id SERIAL PRIMARY KEY,
  name VARCHAR(16),
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_classes(
    class_id SERIAL PRIMARY KEY,
    icon_url VARCHAR(128) NOT NULL,
    name VARCHAR(16) NOT NULL,
    min_score INTEGER NOT NULL,
    max_score INTEGER NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  role_id INT NOT NULL,
  class_id INT DEFAULT NULL,
  token_auth VARCHAR(32) NOT NULL,
  student_id INTEGER NOT NULL,
  username VARCHAR(64) NOT NULL,
  password CHAR(60) NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  score INTEGER DEFAULT 0,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE question_response(
  q_response_id SERIAL PRIMARY KEY,
  answerer_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  competition_id INTEGER NOT NULL,
  is_correct BOOLEAN DEFAULT TRUE,
  file_path_url VARCHAR(255) NOT NULL,
  start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  end_time TIMESTAMP DEFAULT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE questions(
  question_id SERIAL PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  description VARCHAR(255) NOT NULL,
  score INTEGER DEFAULT 0,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE answers(
  answer_id SERIAL PRIMARY KEY,
  question_id INTEGER NOT NULL,
  answer VARCHAR(32) NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE competitions(
  competition_id SERIAL PRIMARY KEY,
  category_id INTEGER NOT NULL,
  name VARCHAR(128) NOT NULL,
  description VARCHAR(255) DEFAULT NULL,
  is_open BOOLEAN DEFAULT TRUE,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE competition_questions(
  com_question_id SERIAL PRIMARY KEY,
  competition_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE competition_category(
  category_id SERIAL PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  description VARCHAR(255) DEFAULT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE competitors(
  competitor_id INTEGER NOT NULL,
  competition_id INTEGER NOT NULL,
  competitor_ranking INTEGER DEFAULT 0,
  is_ban BOOLEAN DEFAULT FALSE,
  score INTEGER DEFAULT 0,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE public.users ADD FOREIGN KEY ("role_id") REFERENCES public.roles("role_id");
ALTER TABLE public.users ADD FOREIGN KEY ("class_id") REFERENCES public.user_classes("class_id");
ALTER TABLE public.question_response ADD FOREIGN KEY ("question_id") REFERENCES public.questions("question_id");
ALTER TABLE public.question_response ADD FOREIGN KEY ("competition_id") REFERENCES public.competitions("competition_id");
ALTER TABLE public.answers ADD FOREIGN KEY ("question_id") REFERENCES public.questions ("question_id");
ALTER TABLE public.competition_questions ADD FOREIGN KEY ("competition_id") REFERENCES public.competitions ("competition_id");
ALTER TABLE public.competition_questions ADD FOREIGN KEY ("question_id") REFERENCES public.questions ("question_id");
ALTER TABLE public.competitions ADD FOREIGN KEY ("category_id") REFERENCES public.competition_category ("category_id");
ALTER TABLE public.competitors ADD FOREIGN KEY ("competitor_id") REFERENCES public.users ("user_id");
ALTER TABLE public.competitors ADD FOREIGN KEY ("competition_id") REFERENCES public.competitions ("competition_id");

-- CREATE INDEX
CREATE INDEX index_user_token ON public.users(token_auth);

-- mock DATA
INSERT INTO public.roles("name") VALUES ('user');
INSERT INTO public.user_classes("icon_url", "name", "min_score", "max_score") VALUES ('', 'beginner', 0, 100);
INSERT INTO public.users ("role_id", "class_id", "token_auth", "student_id", "username", "password", "is_verified", "score", "create_at", "update_at") VALUES ('1', NULL, 'user_e0c316a8e17e', '50', 'user1f52', '$2b$10$pKG6JsmIQd.0URz3NTRApOeo61aYPNMP6yZxAmFYSf1qA5GVSHDSO', 'f', '0', '2020-01-08 07:12:57.48095', '2020-01-08 07:12:57.48095');
INSERT INTO public.competition_category ("category_id", "name", "description", "create_at", "update_at") VALUES ('1', 'test category', 'test description', '2020-01-08 14:27:53.668228', '2020-01-08 14:27:53.668228');
