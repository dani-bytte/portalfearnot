// Guides service (business logic)
const getByType = async (db, type) => {
  const { rows } = await db.query('SELECT * FROM guides WHERE type = $1', [type]);
  return rows[0] || null;
};

const create = async (db, data) => {
  const { title, type, content } = data;
  const { rows } = await db.query(
    `INSERT INTO guides (title, type, content, created_at, updated_at)
     VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *`,
    [title, type, content]
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
    `UPDATE guides SET ${fields.join(', ')}, updated_at = NOW() WHERE id = $${idx} RETURNING *`,
    values
  );
  return rows[0] || null;
};

const remove = async (db, id) => {
  const { rowCount } = await db.query('DELETE FROM guides WHERE id = $1', [id]);
  return rowCount > 0;
};

export default {
  getByType,
  create,
  update,
  remove,
};
