const path = require('path');
require('dotenv').config({ path: path.resolve(`${__dirname}/.env`) });

const Koa = require('koa');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const notFound = require('./backend/404.js');

const onum = new Koa();
const home = require('./backend/routes/home.js');
onum.use(logger()).use(koaBody());
onum.use(home.routes());

onum.use((ctx, next) => {
  notFound(ctx);
});

onum.listen(process.env.PORT);
