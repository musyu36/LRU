const LRU = require("./lru");

// 予測される結果
test("create new array", () => {
    lru = new LRU();
    expect(lru.cache.length).toBe(0);
});