class LRU{
    constructor() {
        this.cache = {};
    }
    put(key, data) {
        this.cache[key] =  data;
    }
    get(key) {
        return this.cache[key];
    }
}
module.exports = LRU;