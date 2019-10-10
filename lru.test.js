const LRU = require("./lru");

// クラスの用意
test("create new array", () => {
    lru = new LRU();
    lru.put("a" , "dataA");
    expect(Object.keys(lru).length).toBe(1);
});

// 要素の追加
test("put the element", () => {
    lru = new LRU();
    lru.put("a", "dataA");
    lru.put("b" , "dataB");
    expect(lru.cache["a"]).toBe("dataA");
    expect(lru.cache["b"]).toBe("dataB");
});

// 要素の表示
test("display the element", () => {
    lru = new LRU();
    lru.put("a", "dataA");
    lru.put("b", "dataB");
    expect(lru.get("a")).toBe("dataA");
    expect(lru.get("b")).toBe("dataB");
});