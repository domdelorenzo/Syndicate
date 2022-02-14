const router = require('express').Router();
const { verifyToken, stripToken, verifyJWT } = require('../middleware');
const controller = require('../controllers/AuthController');

router.post(`/register`, controller.Register);
router.post(`/login`, controller.Login);
// router.get(`/session`, controller.CheckSession);
router.get(`/session`, stripToken, verifyToken, controller.CheckSession);
router.get('/getUsername', verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, user: req.user });
});

module.exports = router;
