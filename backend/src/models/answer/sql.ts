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
