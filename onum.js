require('dotenv').config();

const Koa = require('koa');

const onum = new Koa();

onum.use((ctx, next) => {
  ctx.body = 'Welcome to onum!';
});

onum.listen(process.env.ONUM_PORT);
