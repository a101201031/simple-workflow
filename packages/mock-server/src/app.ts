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

server.get('/approval', (_, res) => {
  res.json([
    {
      approvalFormName: 'leave',
      insertDate: new Date(),
      user: {
        userName: 'JavaScript cho',
        email: 'admin@alwayscoding',
        groupName: 'tech dept',
      },
      approver: [
        {
          userName: 'JavaScript cho',
          email: 'admin@alwayscoding',
          groupName: 'tech dept',
          step: 1,
          status: 'RESOLVE',
        },
        {
          userName: 'JavaScript Youn',
          email: 'jhyoun@alwayscoding',
          groupName: 'tech dept',
          step: 2,
          status: 'PENDING',
        },
      ],
      status: 'PENDING',
      lastUpdate: new Date(),
    },
  ]);
});

server.get('/noti', (_, res) => {
  res.json([
    {
      user: {
        userName: 'JavaScript cho',
        email: 'admin@alwayscoding',
        groupName: 'tech dept',
      },
      isRead: false,
      notiMessage: 'Your request has been approved. (Leave)',
      insertDate: new Date(),
      readDate: null,
    },
    {
      user: {
        userName: 'JavaScript cho',
        email: 'admin@alwayscoding',
        groupName: 'tech dept',
      },
      isRead: false,
      notiMessage: 'admin testttttttttttttt ttt tt!!',
      insertDate: new Date(),
      readDate: null,
    },
    {
      user: {
        userName: 'JavaScript cho',
        email: 'admin@alwayscoding',
        groupName: 'tech dept',
      },
      isRead: false,
      notiMessage: 'admin testttttttttttttt ttt tt!!',
      insertDate: new Date(),
      readDate: null,
    },
  ]);
});

server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running');
});
