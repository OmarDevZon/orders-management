import app from './app';
import config from './config';
import { databaseConecting } from './config/database.config';


databaseConecting();

app.listen(config.PORT, () => {
  console.log(
    `Example app listening on  ${config.PORT} goto link 👉 http://localhost:${config.PORT}/`,
  );
});

