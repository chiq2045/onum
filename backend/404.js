/**
 * Function that deals with 404,
 * Page not found
 *
 * @param {Object} ctx - the Koa context object
 *
 * @example
 *if (!inRoutes(route)) {  */
function pageNotFound(ctx) {
  ctx.status = 404;

  switch (ctx.accepts('html', 'json')) {
    case 'html':
      ctx.type = 'html';
      ctx.body = '<p>Page Not Found</p>';
      break;
    case 'json':
      ctx.body = {
        message: 'Page Not Found'
      };
      break;
    default:
      ctx.type = 'text';
      ctx.body = 'Page Not Found';
  }
  return ctx;
}

module.exports = pageNotFound;
