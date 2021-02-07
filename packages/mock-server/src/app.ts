import jsonServer from 'json-server';
import { join } from 'path';
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
// const userRegister = jsonServer.router(join(__dirname, ))

server.use(jsonServer.bodyParser);
server.use(middlewares);

const port = process.env.PORT || 8000;

server.post('/register', (req, res) => {
  res.jsonp({
    accessToken: '123123123123',
  });
});

server.listen(port, () => {
  console.log('JSON Server is running');
});
