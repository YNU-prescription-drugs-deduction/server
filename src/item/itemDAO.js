const itemModel = require('./itemModel');

exports.getItem = async (param) => {
    return itemModel.findOne(param);
}

exports.getItems = async (param) => {
    return itemModel.find(param);
}

exports.updateItemStatus = async (param) => {
    const _id = param._id;
    const status = param.status;
    await itemModel.findByIdAndUpdate({ _id }, { status });
}

exports.insertItem = async (param) => {
    const item = new itemModel(param);
    await item.save();
}

exports.updateItem = async (param) => {
    const _id = param._id;
    const accountBank = param.accountBank;
    const accountName = param.accountName;
    const accountNumber = param.accountNumber;
    await itemModel.findByIdAndUpdate({ _id }, { accountBank, accountName, accountNumber });
}

exports.deleteItem = async (param) => {
    const _id = param._id;
    await itemModel.findByIdAndDelete({ _id });
}