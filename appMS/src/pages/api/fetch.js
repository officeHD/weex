'use strict';
const stream = weex.requireModule('stream') || {};
const modal = weex.requireModule('modal') || {};

function objToParams(obj) {
    var list = [];
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            list.push(key + '=' + obj[key]);
        }
    }
    return list.join('&');
}
const zAJAX = function(url, datas, func) {

    stream.fetch({
        method: 'POST',
        url: url,
        type: 'json',
        headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: objToParams(datas)
    }, function(res) {

        if (!res.ok) {
            modal.toast({
                message: 'Network Error!',
                duration: 3
            });
        } else {
            func(res.data);
        }
    })

}

module.exports = zAJAX;
