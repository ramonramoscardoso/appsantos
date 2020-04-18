const express = require('express');
const routes = express.Router();

const professionalsController = require('./controllers/professionalsController');
const newsController = require('./controllers/newsController');

routes.get('/professionals', professionalsController.index);
routes.post('/professionals', professionalsController.create);
routes.delete('/professionals/:id', professionalsController.delete)

routes.get('/news', newsController.index);
routes.get('/news/:id', newsController.getNews);
routes.get('/lastnews', newsController.lastNews);
routes.post('/news', newsController.create);

module.exports = routes;