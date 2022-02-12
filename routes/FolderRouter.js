const Router = require('express').Router();
const controller = require('../controllers/FolderController');
const { stripToken, verifyToken } = require('../middleware');

Router.get('/:folder_id', controller.GetFolderByID);
Router.get('/', controller.GetAllFolders);
Router.get(`/user/:user_id`, controller.GetFoldersByUserId);
Router.post('/new/', controller.CreateFolder);
// Router.post('/new/', stripToken, verifyToken, controller.CreateFolder);
Router.put('/:folder_id', stripToken, verifyToken, controller.UpdateFolder);
Router.delete('/:folder_id', stripToken, verifyToken, controller.DeleteFolder);
Router.get('/user/:user_id', controller.GetFolderByUser);

module.exports = Router;
