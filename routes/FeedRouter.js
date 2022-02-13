const Router = require('express').Router();
const controller = require('../controllers/FeedController');
const { stripToken, verifyToken } = require('../middleware');

Router.get('/', controller.GetAllFeeds);
Router.get('/:feed_id', controller.GetFeedByID);
Router.get('/user/:user_id', controller.GetFeedByUserId);
Router.post('/new/', controller.CreateFeed);
// Router.post('/new/', stripToken, verifyToken, controller.CreateFeed);
Router.put('/:feed_id', controller.UpdateFeed);
// Router.put('/:feed_id', stripToken, verifyToken, controller.UpdateFeed);
Router.delete('/:feed_id', controller.DeleteFeed);
// Router.delete('/:feed_id', stripToken, verifyToken, controller.DeleteFeed);

module.exports = Router;
