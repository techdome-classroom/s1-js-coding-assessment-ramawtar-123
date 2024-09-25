const decodeTheRing = function (s, p) {

    if (str.length !== pattern.length) return false;
    
    for (let i = 0; i < str.length; i++) {
        if (pattern[i] !== '*' && pattern[i] !== str[i]) {
            return false;
        }
    }
    
    return true;
}

module.exports = decodeTheRing;

