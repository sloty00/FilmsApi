const router = require('express').Router();

const middleware = require('./middlewares');
const apiFilmsRouters = require('./api/films');
const apiUsersRouters = require('./api/users');

router.use('/films', middleware.checkToken, apiFilmsRouters); //Proteccion de rutas por middlewares
router.use('/users', apiUsersRouters);

module.exports = router;