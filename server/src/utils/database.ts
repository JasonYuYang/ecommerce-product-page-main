import * as mongoose from 'mongoose';

const connectDatabase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2jw9w.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      } as mongoose.ConnectOptions
    )
    .then((con) => {
      console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { connectDatabase };
