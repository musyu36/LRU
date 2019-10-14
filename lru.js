// 要素の順番を入れ替える
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
    // 配列の準備
    constructor() {
        this.cache = [];
    }

    // 要素を追加する
    put(key, data) {
        this.cache.push({[key]: data });

        // 配列の要素数が３以上になると先頭の要素を削除する
        if (this.cache.length >= 3) {
            this.cache.shift();
        }
    }
    // 要素を取得する
    get(x) {
        var for_return;
        var cnt = 0;

        // 引数とキーが合致する要素を探す
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
        // 取得された要素を配列の末尾に挿入する
        this.cache = moveAt(this.cache, cnt, this.cache.length - 1);
        return for_return;
    }
}
module.exports = LRU;