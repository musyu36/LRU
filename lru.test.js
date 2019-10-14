const LRU = require("./lru");

// 入れものの用意
test("create new array", () => {
    lru = new LRU();
    expect(lru.cache.length).toBe(0);
});

// 要素を追加していく
test("put the element", () => {
    lru = new LRU();
    lru.put("a", "dataA");
    expect(lru.cache[0]["a"]).toBe("dataA");
});

// 要素を表示する
test("display the element", () => {
    lru = new LRU();
    lru.put("a", "dataA");
    lru.put("b", "dataB");
    expect(lru.get("b")).toBe("dataB");
});

// 使われていない要素を削除する
test("delete the latest element", () => {
    lru = new LRU();
    lru.put("a", "dataA");
    lru.put("b", "dataB");
    lru.put("c", "dataC");
    expect(lru.get("a")).toBeFalsy();
    expect(lru.cache.length).toBe(2);
});

// getされた要素を使われたとみなす
test("deal with got element as used element", () => {
    lru = new LRU();
    lru.put("a", "dataA");
    lru.put("b", "dataB");
    lru.get("a");
    lru.put("c", "dataC");
    expect(lru.get("b")).toBeFalsy();
    expect(lru.cache.length).toBe(2);
});