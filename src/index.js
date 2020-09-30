exports.min = function min(array) {
    if (array === null) return 0;
    if (typeof array == "undefined") return 0;
    if (array.constructor !== Array) return 0;
    if (array.length === 0) return 0;

    var result = array[0];

    for (var i = 1; i < array.length; i++) {
        if (result > array[i]) result = array[i];
    }

    return result;
};

exports.max = function max(array) {
    if (array === null) return 0;
    if (typeof array == "undefined") return 0;
    if (array.constructor !== Array) return 0;
    if (array.length === 0) return 0;

    var result = array[0];

    for (var i = 1; i < array.length; i++) {
        if (result < array[i]) result = array[i];
    }

    return result;
};

exports.avg = function avg(array) {
    if (array === null) return 0;
    if (typeof array == "undefined") return 0;
    if (array.constructor !== Array) return 0;
    if (array.length === 0) return 0;

    var result = 0;

    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }

    result = result / array.length;

    return result;
};
