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
  verify_token VARCHAR(64) DEFAULT NULL,
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
  is_answer BOOLEAN DEFAULT FALSE,
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
ALTER TABLE public.answers ADD FOREIGN KEY ("question_id") REFERENCES public.questions ("question_id") ON DELETE CASCADE;
ALTER TABLE public.competition_questions ADD FOREIGN KEY ("competition_id") REFERENCES public.competitions ("competition_id") ON DELETE CASCADE;
ALTER TABLE public.competition_questions ADD FOREIGN KEY ("question_id") REFERENCES public.questions ("question_id") ON DELETE CASCADE;
ALTER TABLE public.competitions ADD FOREIGN KEY ("category_id") REFERENCES public.competition_category ("category_id") ON DELETE CASCADE;
ALTER TABLE public.competitors ADD FOREIGN KEY ("competitor_id") REFERENCES public.users ("user_id");
ALTER TABLE public.competitors ADD FOREIGN KEY ("competition_id") REFERENCES public.competitions ("competition_id");


-- TYPE

-- for return data after user answer the question
CREATE TYPE USER_ANSWERING AS (score INTEGER, is_correct BOOLEAN);

-- Stored Function

-- for user answer the question
CREATE OR REPLACE FUNCTION answer_question (u_id INTEGER, q_id INTEGER, answer_value VARCHAR(32), comp_id INTEGER, file_url VARCHAR(255))
			RETURNS user_answering
			AS $$
DECLARE
	question_score INTEGER DEFAULT 0;
	is_answer BOOLEAN DEFAULT NULL;
	return_info USER_ANSWERING;
BEGIN
	-- check user has already answered
	SELECT
		check_user_answer_response (u_id,q_id,comp_id) INTO is_answer;
	-- check answer
	SELECT
		questions.score INTO question_score
	FROM
		answers
		INNER JOIN questions ON questions.question_id = answers.question_id
	WHERE
		answers.question_id = q_id
		AND answers.answer = answer_value
		AND answers.is_answer = TRUE;

	-- check score of answer
	IF question_score IS NOT NULL THEN
		-- update score
		UPDATE
			users
		SET
			score = score + question_score
		WHERE
			users.user_id = u_id
		RETURNING
			users.score INTO return_info.score;
     -- insert for user answering
		INSERT INTO question_response (answerer_id, question_id, competition_id, is_correct, file_path_url)
			VALUES(u_id, q_id, comp_id, TRUE, file_url);
	 -- return correct flag;
		SELECT TRUE INTO return_info.is_correct;
		RETURN return_info;
	END IF;
	SELECT
		score INTO return_info.score
	FROM
		users
	WHERE
		users.user_id = u_id;
	-- insert for user answering
		INSERT INTO question_response (answerer_id, question_id, competition_id, is_correct, file_path_url)
			VALUES(u_id, q_id, comp_id, FALSE, file_url);
	-- return incorrect flag;
		SELECT FALSE INTO return_info.is_correct;
	RETURN return_info;
END;
$$
LANGUAGE plpgsql;


-- for check user answered this question or not
CREATE OR REPLACE FUNCTION check_user_answer_response (u_id INTEGER, q_id INTEGER, comp_id INTEGER) RETURNS BOOLEAN
AS $$
DECLARE
	response_id INTEGER DEFAULT NULL;
BEGIN
	SELECT question_response.q_response_id INTO response_id FROM question_response WHERE answerer_id = u_id AND question_id = q_id AND competition_id = comp_id;
IF response_id IS NOT NULL THEN
 RAISE EXCEPTION SQLSTATE '90001' USING MESSAGE = 'user answered this question';
END IF;
RETURN TRUE;
END;
$$
LANGUAGE plpgsql;

-- CREATE INDEX
CREATE INDEX index_user_token ON public.users(token_auth);

-- mock DATA
INSERT INTO public.roles("name") VALUES ('user');
INSERT INTO "public"."roles" ("name", "create_at", "update_at") VALUES ('admin', '2020-01-11 04:43:38.086789', '2020-01-11 04:43:38.086789');
INSERT INTO public.user_classes("icon_url", "name", "min_score", "max_score") VALUES ('', 'beginner', 0, 100);
INSERT INTO public.users ("role_id", "class_id", "token_auth", "student_id", "username", "password", "is_verified", "score", "create_at", "update_at","verify_token") VALUES ('1', NULL, 'user_e0c316a8e17e', '50', 'user1f52', '$2b$10$pKG6JsmIQd.0URz3NTRApOeo61aYPNMP6yZxAmFYSf1qA5GVSHDSO', 'f', '0', '2020-01-08 07:12:57.48095', '2020-01-08 07:12:57.48095','verify_e0c316a8e17e');
INSERT INTO public.competition_category ("category_id", "name", "description", "create_at", "update_at") VALUES ('1', 'test category', 'test description', '2020-01-08 14:27:53.668228', '2020-01-08 14:27:53.668228');
INSERT INTO "public"."questions" ("name", "description", "score", "create_at", "update_at") VALUES ('test Question', 'waaaa', '100', '2020-01-10 04:12:23.087576', '2020-01-10 04:12:23.118');
INSERT INTO "public"."answers" ("question_id", "answer", "is_answer", "create_at", "update_at") VALUES ('1', 'test', 't', '2020-01-10 04:23:31.782218', '2020-01-10 04:23:31.782218');
INSERT INTO "public"."answers" ("question_id", "answer", "is_answer", "create_at", "update_at") VALUES ('1', 'test1', 'f', '2020-01-10 04:23:31.801361', '2020-01-10 04:23:31.801361');
INSERT INTO "public"."competitions" ("competition_id", "category_id", "name", "description", "is_open", "start_date", "end_date", "create_at", "update_at") VALUES ('1', '1', 'new Competition', 'new Description', 't', '2020-01-10 04:23:29.433', '2020-01-10 04:23:29.433', '2020-01-10 04:23:29.399925', '2020-01-10 04:23:29.468');
INSERT INTO "public"."users" ("user_id", "role_id", "class_id", "token_auth", "student_id", "username", "password", "is_verified", "score", "verify_token", "create_at", "update_at") VALUES ('2', '1', NULL, 'user_e0c316a8e17e', '50', 'user1f52', '$2b$10$pKG6JsmIQd.0URz3NTRApOeo61aYPNMP6yZxAmFYSf1qA5GVSHDSO', 'f', '700', 'verify_e0c316a8e17e', '2020-01-08 07:12:57.48095', '2020-01-08 07:12:57.48095');
INSERT INTO "public"."users" ("user_id", "role_id", "class_id", "token_auth", "student_id", "username", "password", "is_verified", "score", "verify_token", "create_at", "update_at") VALUES ('3', '2', NULL, 'user_a908a9fccd2f', '123', 'turing_user@turing.com', '$2b$10$SSTF5sizBgnxIPGB3fs0JOFv3r.AxD1ZXNqnDL4fwt7SwzraaWRTy', 't', '0', NULL, '2020-01-10 07:35:41.201149', '2020-01-10 09:52:45.911');
