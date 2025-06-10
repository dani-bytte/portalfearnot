import bcrypt from 'bcrypt';

// Auth service (business logic)
const login = async (db, username, password, jwtSign) => {
  const { rows } = await db.query('SELECT * FROM admin_users WHERE username = $1', [username]);
  const user = rows[0];
  if (!user) return null;
  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) return null;
  const token = jwtSign({ id: user.id, username: user.username });
  return token;
};

const register = async (db, username, password) => {
  const passwordHash = await bcrypt.hash(password, 10);
  await db.query(
    'INSERT INTO admin_users (username, password_hash, created_at, updated_at) VALUES ($1, $2, NOW(), NOW())',
    [username, passwordHash]
  );
};


export default {
  login,
  register,
};
