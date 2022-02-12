const { Feed, Folder } = require('../models');

const GetAllFeeds = async (req, res) => {
  try {
    const feeds = await Feed.findAll();
    res.send(feeds);
  } catch (error) {
    throw error;
  }
};

const GetFeedByID = async (req, res) => {
  try {
    let id = parseInt(req.params.feed_id);
    const feed = await Feed.findByPk(id);
    res.send(feed);
  } catch (error) {
    throw error;
  }
};

const GetFeedByUserId = async (req, res) => {
  try {
    const feeds = await Feed.findAll({
      where: { user_id: req.params.user_id },
      include: Folder,
      order: [['createdAt', 'DESC']]
    });
    res.send(feeds);
  } catch (error) {
    throw error;
  }
};

const CreateFeed = async (req, res) => {
  try {
    let feed = await Feed.create(req.body);
    res.send(feed);
  } catch (error) {
    console.log(req.body);
    throw error;
  }
};

const UpdateFeed = async (req, res) => {
  try {
    let id = parseInt(req.params.feed_id);
    let feedUpdate = await Feed.update(req.body, {
      where: { id: id },
      returning: true
    });
    res.send(feedUpdate);
  } catch (error) {
    throw error;
  }
};

const DeleteFeed = async (req, res) => {
  try {
    let id = parseInt(req.params.feed_id);
    await Feed.destroy({ where: { id: id } });
    res.send({ message: `Feed ID ${id} has been deleted.` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateFeed,
  GetAllFeeds,
  GetFeedByID,
  GetFeedByUserId,
  UpdateFeed,
  DeleteFeed
};
