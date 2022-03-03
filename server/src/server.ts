import * as path from 'path';
import * as http from 'http';
import * as dotenv from 'dotenv';
// Setting up config file
if (process.env.NODE_ENV !== 'PRODUCTION') {
  dotenv.config({ path: path.join(__dirname, './config/config.env') });
}
import app from './app';

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server Start on PORT: ${PORT} in ${process.env.NODE_ENV} mode.`);
});
