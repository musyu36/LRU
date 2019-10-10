class LRU{
    constructor() {
        this.cache = {};
    }
    put(key, data) {
        this.cache[key] =  data;
    }
}
module.exports = LRU;