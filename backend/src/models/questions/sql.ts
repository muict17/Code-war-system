export const baseSelectSql = `
  SELECT
    question_id
    name
    description
    score
    create_at
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
