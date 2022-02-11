const { Folder } = require('../models');

const GetAllFolders = async (req, res) => {
  try {
    const folders = await Folder.findAll();
    res.send(folders);
  } catch (error) {
    throw error;
  }
};

const GetFolderByID = async (req, res) => {
  try {
    let id = parseInt(req.params.folder_id);
    const folder = await Folder.findByPk(id);
    res.send(folder);
  } catch (error) {
    throw error;
  }
};

const GetFoldersByUserId = async (req, res) => {
  try {
    const folders = await Folder.findAll({
      where: { user_id: req.params.user_id }
    });
    res.send(folders);
  } catch (error) {
    throw error;
  }
};

const CreateFolder = async (req, res) => {
  try {
    let folder = await Folder.create(req.body);
    res.send(folder);
  } catch (error) {
    throw error;
  }
};

const UpdateFolder = async (req, res) => {
  try {
    let id = parseInt(req.params.folder_id);
    let folderUpdate = await Folder.update(req.body, {
      where: { id: id },
      returning: true
    });
    res.send(folderUpdate);
  } catch (error) {
    throw error;
  }
};

const DeleteFolder = async (req, res) => {
  try {
    let id = parseInt(req.params.folder_id);
    await Folder.destroy({ where: { id: id } });
    res.send({ message: `Folder ID ${id} has been deleted.` });
  } catch (error) {
    throw error;
  }
};

const GetFolderByUser = async (req, res) => {
  try {
    let id = parseInt(req.params.user_id);
    const folder = await Folder.findAll({ where: { user_id: id } });
    res.send(folder);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateFolder,
  GetAllFolders,
  GetFolderByID,
  GetFoldersByUserId,
  UpdateFolder,
  DeleteFolder,
  GetFolderByUser
};
