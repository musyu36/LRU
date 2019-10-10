const LRU = require("./lru");

// テスト名
test("create new array", () => {
    lru = new LRU();
    lru.put("a" , "dataA");
    expect(Object.keys(lru).length).toBe(1);
});

test("put the element", () => {
    lru = new LRU();
    lru.put("a", "dataA");
    lru.put("b" , "dataB");
    expect(lru.cache["a"]).toBe("dataA");
    expect(lru.cache["b"]).toBe("dataB");
});