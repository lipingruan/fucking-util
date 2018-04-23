'use strict';

module.exports = {
    format: dateFormat,
    monthId: generateMonthId
};

const Weeks  = ['日', '一', '二', '三', '四', '五', '六'];
const DftStr = 'YYYY-MM-DD hh:mm:ss';

function dateFormat(timestamp, formatStr) {
    let str  = formatStr;
    let date = null;

    if (timestamp && timestamp.constructor !== Date && +timestamp)
    date = new Date(+timestamp);

    if(!date)
    date = new Date;

    if(!str)
    str = DftStr;

    let month = date.getMonth();
    let year = date.getYear();
    let fullYear = date.getFullYear();
    let week = date.getDay();
    let day = date.getDate();
    let hour = date.getHours();
    let minu = date.getMinutes();
    let sec = date.getSeconds();
    let ms = date.getMilliseconds();

    str = str.replace(/yyyy|YYYY/, fullYear);
    str = str.replace(/yy|YY/, (year % 100) > 9 ? (year % 100).toString() : '0' + (year % 100));
    str = str.replace(/MM/, (month + 1) > 9 ? (month + 1).toString() : '0' + (month + 1));
    str = str.replace(/M/g, (month + 1));
    str = str.replace(/w|W/g, Weeks[week]);
    str = str.replace(/dd|DD/, day > 9 ? day.toString() : '0' + day);
    str = str.replace(/d|D/g, day);
    str = str.replace(/hh|HH/, hour > 9 ? hour.toString() : '0' + hour);
    str = str.replace(/h|H/g, hour);
    str = str.replace(/mm/, minu > 9 ? minu.toString() : '0' + minu);
    str = str.replace(/m/g, minu);
    str = str.replace(/ss|SS/, sec > 9 ? sec.toString() : '0' + sec);
    str = str.replace(/s|S/g, sec);
    str = str.replace(/xxx|XXX/, (ms > 9 ? ms > 99 ? '' : '0' : '00') + ms);
    return str
}

function generateMonthId(timestamp) {

    let dateStr = dateFormat(timestamp, 'YYYYMM');

    return +dateStr;
}