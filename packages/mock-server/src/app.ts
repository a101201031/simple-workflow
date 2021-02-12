import jsonServer from 'json-server';
const router = jsonServer.router('./src/data.json');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

const port = process.env.PORT || 8000;

server.post('/register', (_, res) =>
  res.json({
    accessToken: '123123123123',
  }),
);

server.post('/token', (req, res) => {
  if (req.body.email === 'admin@alwayscoding.app') {
    res.json({
      accessToken: '123123123123',
    });
  } else {
    res.status(400).json({ message: 'error' });
  }
});

server.use('/', (req, res, next) => {
  if (req.headers.authorization === 'Bearer 123123123123') {
    next();
  } else {
    res.status(400).json({ message: 'Autorization Error' });
  }
});

server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running');
});
