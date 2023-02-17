const router = require('express').Router();
const itemController = require('./itemController');

// token 확인 후, item 조회
router.get('/', itemController.item); // 전체 item 조회
router.get('/:itemId', itemController.item); // 특정 item 조회
// token 확인 후, item 추가
router.post('/', itemController.item);

module.exports = router;