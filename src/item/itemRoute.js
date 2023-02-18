const router = require('express').Router();
const auth = require('../../util/jwt').auth;
const itemController = require('./itemController');

// item 조회
router.get('/', auth, itemController.item); // 전체 item 조회
router.get('/:itemId', auth, itemController.item); // 특정 item 조회
// item insert
router.post('/insert', auth, itemController.insert);
// item update
router.post('/update', auth, itemController.update);
router.post('/update/status', auth, itemController.status);
// item delete
router.post('/delete', auth, itemController.delete);


module.exports = router;