import getters from "../getters";

const products = [
  {
    _id: "0001",
    discount: {
      unit: "%",
      value: 50,
    },
    unit: "%",
    value: 50,
    id: "0001",
    imgUrl:
      "https://salt.tikicdn.com/cache/w200/ts/product/cb/12/d5/af8325d164146466046581d008b7b781.jpg",
    name: "Đèn pin mini siêu sáng",
    price: 86000,
    sku: "A0001",
    sold: 100,
    star: 4,
  },
  {
    _id: "0002",
    discount: {
      unit: "%",
      value: 26,
    },
    id: "0002",
    imgUrl:
      "https://salt.tikicdn.com/cache/200x200/ts/product/72/73/df/32874df2e97e42dc30d219150601262e.png",
    name: "Súp lơ xanh",
    price: 53000,
    sku: "A0002",
    sold: 120,
    star: 5,
  },
];
let state;

beforeEach(() => {
  state = {
    items: products.map((product) => ({ ...product, quantity: 1 })),
  };
});

describe("store/cart/getters.js", () => {
  test("itemsCount", () => {
    expect(getters.itemsCount(state)).toBe(2);
  });

  test("totalPrice", () => {
    expect(getters.totalPrice(state)).toBe(139000);
  });
});
