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

exports.updateItemStatus = async (param) => {
    console.log("id : " + param._id);
    console.log("status : " + param.status);
    await itemModel.findByIdAndUpdate({ _id: param._id }, { status: param.status });
}