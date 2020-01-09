export const baseSelectSql = `
  SELECT
    question_id,
    name,
    description,
    score,
    create_at,
    update_at
  FROM questions
`;

export const baseInsertSql = `
  INSERT INTO questions(
    name,
    description,
    score
  )
`;

export const baseSelectJoinSql = `
SELECT
  questions.question_id AS questions_question_id,
  questions.name AS questions_name,
  questions.description AS questions_description,
  questions.score AS questions_score,
  questions.create_at AS questions_create_at,
  questions.update_at AS questions_update_at
`;
export const baseUpdateSql = `
  UPDATE questions
  SET
    name = %L,
    description = %L,
    score = %s,
    update_at = %L
`;

export const baseDeleteSql = "DELETE FROM questions";
