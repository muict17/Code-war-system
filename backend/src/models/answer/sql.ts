export const baseSelectSql = `
  SELECT
    answer_id,
    question_id,
    answer,
    is_answer,
    create_at,
    update_at
  FROM answers
`;

export const baseSelectJoinSql = `
  SELECT
    answers.answer_id  AS answers_answer_id ,
    answers.question_id  AS answers_question_id,
    answers.answer  AS answers_answer,
    answers.is_answer  AS answers_is_answer,
    answers.create_at  AS answers_create_at,
    answers.update_at  AS answers_update_at`;

export const baseInsertSql = `
  INSERT INTO answers(
    question_id,
    answer,
    is_answer
  )
`;

export const baseDeleteSql = ` DELETE FROM answers`;

export const baseUpdateSql = `
  UPDATE answers
  SET
    answer = %L,
    is_answer = %L,
    update_at = %L
`;
