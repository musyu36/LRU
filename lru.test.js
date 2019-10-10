const LRU = require("./lru");

// 入れものの用意
test("create new array", () => {
    lru = new LRU();
    expect(lru.cache.length).toBe(0);
});

// // 要素を追加していく
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
    console.log(lru.cache);
    expect(lru.cache.length).toBe(2);
});



// // クラスの用意
// test("create new array", () => {
//     lru = new LRU();
//     expect(Object.keys(lru.cache).length).toBe(0);
// });

// // 要素の追加
// test("put the element", () => {
//     lru = new LRU();
//     lru.put("a", "dataA");
//     lru.put("b" , "dataB");
//     expect(lru.cache["a"]).toBe("dataA");
//     expect(lru.cache["b"]).toBe("dataB");
// });

// // 要素の表示
// test("display the element", () => {
//     lru = new LRU();
//     lru.put("a", "dataA");
//     lru.put("b", "dataB");
//     expect(lru.get("a")).toBe("dataA");
//     expect(lru.get("b")).toBe("dataB");
// });

// // 使われていない要素を削除する
// test("display the element", () => {
//     lru = new LRU();
//     lru.put("a", "dataA");
//     lru.put("b", "dataB");
//     lru.put("c", "dataC");
//     console.log(lru.get("a"));
//     console.log(lru);
//     expect(lru.cache).not.toContain("a");
// });