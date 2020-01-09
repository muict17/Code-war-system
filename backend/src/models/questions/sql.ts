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

export const baseUpdateSql = `
  UPDATE questions
  SET
    name = %L,
    description = %L,
    score = %s,
    update_at = %L
`;

export const baseDeleteSql = "DELETE FROM questions";
