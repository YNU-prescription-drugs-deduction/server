const userModel = require('./userModel');


exports.signup = async (param) => {
    const user = new userModel(param);
    await user.save();
}

exports.isContain = async (param) => {
    const user = await userModel.findOne(param);
    if (user)
        return true;
    else
        return false;
}

exports.getUser = async (param) => {
    return await userModel.findOne(param);
}