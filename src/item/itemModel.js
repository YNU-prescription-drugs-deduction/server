const mongoose = require('mongoose');

const Item = new mongoose.Schema({
    userId: { type: String, ref: 'User', required: true },
    date: { type: Date, default: new Date(), require: true },
    status: { type: String, default: "접수", require: true },
    accountBank: { type: String, require: true }, // 은행
    accountName: { type: String, require: true }, // 예금주
    accountNumber: { type: String, require: true }, // 계좌번호
})

module.exports = mongoose.model('Item', Item);