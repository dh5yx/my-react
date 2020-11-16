import Mock from "mockjs";
Mock.mock("http://127.0.0.1:1234/menu", /post|get/i, {
  // /post|get/i 匹配post和get模式 也可以用'post'或'get'
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|100": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
      // 随机数字1-100
      "number|1-100": 100,
      // 返回city数组，每次里面有三个
      "city": '上海市',
    },
  ],
});

Mock.mock("http://127.0.0.1:1234/login", /post|get/i, {
  // /post|get/i 匹配post和get模式 也可以用'post'或'get'
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "token|1-10000": 100,
});
