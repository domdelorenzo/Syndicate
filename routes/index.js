const Router = require('express').Router();
const UserRouter = require('./UserRouter');
const FolderRouter = require('./FolderRouter');
const FeedRouter = require('./FeedRouter');
const AuthRouter = require('./AuthRouter');

Router.get('/', (req, res) => {
  res.send('This is root');
});
Router.use('/user', UserRouter);
Router.use('/folder', FolderRouter);
Router.use('/feed', FeedRouter);
Router.use('/auth', AuthRouter);

module.exports = Router;
