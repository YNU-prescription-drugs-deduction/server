const itemDAO = require('./itemDAO');
const jwt = require('../../util/jwt');

exports.item = async (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token);
    if (decoded.id) { // 유효한 token
        const userId = decoded.id;

        // item 조회
        if (req.method === 'GET') {
            if (req.params.itemId) { // 특정 item 조회
                const _id = req.params.itemId
                const item = await itemDAO.getItem({ userId, _id });
                res.status(200).send(item);
            }
            else { // 전체 item 조회
                const items = await itemDAO.getItems({ userId });
                res.status(200).send(items);
            }
        }

        // item 추가
        if (req.method === 'POST') {
            req.body.userId = userId;
            await itemDAO.addItem(req.body);
            res.status(200).send();
        }
    } else { // 유효하지 않은 token
        res.status(401).send({ message: decoded });
    }
}