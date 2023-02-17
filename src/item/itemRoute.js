const router = require('express').Router();
const itemController = require('./itemController');

// item 조회
router.get('/', itemController.item); // 전체 item 조회
router.get('/:itemId', itemController.item); // 특정 item 조회
// item 추가
router.post('/', itemController.item);
// item status 변경
router.post('/status', itemController.status);


module.exports = router;