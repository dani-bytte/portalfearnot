// FAQs service (business logic)
const getAll = async (db, { offset = 0, limit = 10 } = {}) => {
  const { rows } = await db.query(
    'SELECT * FROM faqs ORDER BY "order" ASC NULLS LAST, id ASC OFFSET $1 LIMIT $2',
    [offset, limit]
  );
  return rows;
};

const create = async (db, data) => {
  const { question, answer, order } = data;
  const { rows } = await db.query(
    `INSERT INTO faqs (question, answer, "order", created_at, updated_at)
     VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *`,
    [question, answer, order]
  );
  return rows[0];
};

const update = async (db, id, data) => {
  const fields = [];
  const values = [];
  let idx = 1;
  for (const key in data) {
    fields.push(`${key} = $${idx}`);
    values.push(data[key]);
    idx++;
  }
  values.push(id);
  const { rows } = await db.query(
    `UPDATE faqs SET ${fields.join(', ')}, updated_at = NOW() WHERE id = $${idx} RETURNING *`,
    values
  );
  return rows[0] || null;
};

const remove = async (db, id) => {
  const { rowCount } = await db.query('DELETE FROM faqs WHERE id = $1', [id]);
  return rowCount > 0 ? true : false;
};

export default {
  getAll,
  create,
  update,
  remove,
};
