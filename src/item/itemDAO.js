const itemModel = require('./itemModel');

exports.getItems = async (param) => {
    return itemModel.find(param);
}

exports.getItem = async (param) => {
    return itemModel.findOne(param);
}

exports.addItem = async (param) => {
    const item = new itemModel(param);
    await item.save();
}