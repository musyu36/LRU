function moveAt(array, index, at) {
    if (index === at || index > array.length - 1 || at > array.length - 1) {
        return array;
    }

    const value = array[index];
    const tail = array.slice(index + 1);

    array.splice(index);

    Array.prototype.push.apply(array, tail);

    array.splice(at, 0, value);

    return array;
}

class LRU{
    constructor() {
        this.cache = [];
    }
    put(key, data) {
        this.cache.push({[key]: data });

        if (this.cache.length >= 3) {
            this.cache.shift();
        }
    }
    get(x) {
        var for_return;
        var cnt = 0;

        this.cache.forEach(function (value) {
            for (var key in value) {
                if (key === x) {
                    for_return = value[key];
                    break;
                }
            }
            if (for_return == null) {
                cnt++;
            }
        });
        this.cache = moveAt(this.cache, cnt, this.cache.length - 1);
        return for_return;
    }
}
module.exports = LRU;