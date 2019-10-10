function lru() {
    var cache = new Array(2);
    return cache.length;
}

class LRU{
    constructor() {
        this.cache = new Array(2);
    }
}
module.exports = LRU;