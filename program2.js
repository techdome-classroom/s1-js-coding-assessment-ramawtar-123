const decodeTheRing = function (s, p) {

    // write your code function decodeTheRing(str, pattern) {
    if (str.length !== pattern.length) return false;
    
    for (let i = 0; i < str.length; i++) {
        if (pattern[i] !== '*' && pattern[i] !== str[i]) {
            return false;
        }
    }
    
    return true;
}

module.exports = decodeTheRing;

