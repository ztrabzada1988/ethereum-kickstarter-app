const routes = require('next-routes')(); // the second () means we are requiring a function and gets immediatly invoked
// see next-routes documentation for above and below codes examples


routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show') // :address is the wildcard or variable or placeholder that will be passed somewhere else
    .add('/campaigns/:address/requests', '/campaigns/requests/index')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

    module.exports = routes;