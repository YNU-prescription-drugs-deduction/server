const itemDAO = require('./itemDAO');
const jwt = require('../../util/jwt');

exports.item = async (req, res) => {

    const userId = req.user.id;
    const activated = req.user.activated;

    // 특정 item 조회
    if (req.params.itemId) {
        const _id = req.params.itemId
        const item = await itemDAO.getItem({ userId, _id });
        res.status(200).send(item);
    }
    // 전체 item 조회
    else {
        var items
        if (activated === "admin") {
            items = await itemDAO.getItems({});
        }
        else if (activated === "user") {
            items = await itemDAO.getItems({ userId });
        }
        res.status(200).send(items);
    }
}

exports.status = async (req, res) => {
    await itemDAO.updateItemStatus(req.body);
    res.status(200).send({});
}

exports.insert = async (req, res) => {
    req.body.userId = req.user.id;
    await itemDAO.insertItem(req.body);
    res.status(200).send();
}

exports.update = async (req, res) => {
    await itemDAO.updateItem(req.body);
    res.status(200).send({});
}

exports.delete = async (req, res) => {
    await itemDAO.deleteItem(req.body);
    res.status(200).send({});
}