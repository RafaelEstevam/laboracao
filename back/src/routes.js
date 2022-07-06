const { Router } = require("express");
const userController = require("./controller/userController");
const hoursController = require("./controller/hoursController");

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
});

routes.post('/login', userController.login);

routes.post('/users/new', userController.post);
routes.put('/users/edit/:id', userController.put);
routes.get('/users/:id', userController.get);

routes.post('/hours', hoursController.generateHoursbyConfig);
routes.post('/exercises', hoursController.generateExercises);

module.exports = routes;