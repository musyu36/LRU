class LRU{
    constructor() {
        this.cache = [];
    }
    put(key, data) {
        console.log(key);
        this.cache.push({[key]: data });
        console.log(this.cache);

        if (this.cache.length >= 3) {
            this.cache.shift();
        }
    }
    get(x) {
        var for_return;
        this.cache.forEach(function (value) {
            for (var key in value){
                if (key === x) {
                    for_return = value[key]
                }
            }
        });
        return for_return;
    }
    // constructor() {
    //     this.cache = {};
    // }
    // put(key, data) {
    //     this.cache[key] = data;
    //     if (Object.keys(lru.cache).length >= 3) {
    //         let keys_array = Object.keys(this.cache);
    //         let len = keys_array.length;
    //         // delete this.cache[keys_array[len - 1]];
    //         // delete this.cache['a'];
    //         delete this.cache[0];
    //         console.log("deleted");
    //     }
    // }
    // get(key) {
    //     return this.cache[key];
    // }
}
module.exports = LRU;