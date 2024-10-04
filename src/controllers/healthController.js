import sequelize from '../config/database.js';

async function checkDatabaseConnection() {
  try {
    await sequelize.authenticate();
    return true;
  } catch (err) {
    return false;
  }
}

export const healthCheck = async (req, res) => {
  if (Object.keys(req.body).length > 0) {
    return res.status(400).send();
  }

  const isConnected = await checkDatabaseConnection();
  const statusCode = isConnected ? 200 : 503;

  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'X-Content-Type-Options': 'nosniff',
  });
  return res.status(statusCode).send();
};