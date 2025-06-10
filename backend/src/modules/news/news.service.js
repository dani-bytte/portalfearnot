// News service (business logic)
const getAll = async (db) => {
  const { rows } = await db.query('SELECT * FROM news ORDER BY publication_date DESC');
  return rows;
};

const getBySlug = async (db, slug) => {
  const { rows } = await db.query('SELECT * FROM news WHERE slug = $1', [slug]);
  return rows[0] || null;
};

const create = async (db, data) => {
  const { title, slug, summary, content, image_url, publication_date, author } = data;
  const { rows } = await db.query(
    `INSERT INTO news (title, slug, summary, content, image_url, publication_date, author, created_at, updated_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW()) RETURNING *`,
    [title, slug, summary, content, image_url, publication_date, author]
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
    `UPDATE news SET ${fields.join(', ')}, updated_at = NOW() WHERE id = $${idx} RETURNING *`,
    values
  );
  return rows[0] || null;
};

const remove = async (db, id) => {
  const { rowCount } = await db.query('DELETE FROM news WHERE id = $1', [id]);
  return rowCount > 0;
};

export default {
  getAll,
  getBySlug,
  create,
  update,
  remove,
};
