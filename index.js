/**
 * Expose increment
 */

module.exports = increment;

/**
 * Increment a number or alpha character
 * @param  {String|Number} value
 * @param  {Array} skip
 * @param  {Number} incrementBy
 * @return {String|Number}
 * @api public
 */
function increment(value, skip, incrementBy) {
    var str = (typeof value === 'string');
    var incrementBy = incrementBy || 1;
    var numeric = !isNaN(value);
    var skip = skip || [];
    var nextVal;

    if (numeric) {
        value = parseInt(value) + parseInt(incrementBy);
    } else {
        value = String.fromCharCode(value.charCodeAt(0) + parseInt(incrementBy));
    }

    if (str) value = value.toString();
    if (skip.indexOf(value) === -1) return value;
    return increment(value, skip, incrementBy);
};