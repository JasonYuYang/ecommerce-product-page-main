import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';

const productRouter = require('./routes/products/products.router');

const app = express();

// Implement CORS
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(morgan('combined'));

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../../client/dist')));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
//   });
// }

app.use('/api/v1', productRouter);

export default app;
