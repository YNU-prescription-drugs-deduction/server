const today = new Date();

const todayYear = today.getFullYear();
const todayMonth = today.getMonth();
const todayDate = today.getDate();

var todayString = todayYear + "-";
if (todayMonth < 10) {
    todayString += "0";
}
todayString += todayMonth + "-";
if (todayDate < 10) {
    todayString += "0";
}
todayString += todayDate;

module.exports = todayString