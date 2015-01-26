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
    var incrementBy = incrementBy || 1;
    var skip = skip || [];
    var numeric = !isNaN(value);
    var nextVal;

    if (numeric) {
        value = (typeof value === 'string') ? (parseInt(value) + incrementBy).toString() : value + incrementBy;
    } else {
        value = String.fromCharCode(value.charCodeAt(0) + incrementBy);
    }
    if (skip.indexOf(value) === -1) return value;
    return increment(value, skip, incrementBy);
};