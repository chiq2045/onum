const Router = require('@koa/router');

const router = new Router({
  prefix: '/'
});

router.get('home', '/', (ctx, next) => {
  ctx.body = 'This is the homepage';
});

module.exports = router;
