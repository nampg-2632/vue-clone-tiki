import mutations from "../mutations";

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
    items: [],
  };
});

describe("store/cart/mutations.js", () => {
  test("addToCart", () => {
    expect(state.items.length).toBe(0);

    mutations.addToCart(state, products[0]);
    expect(state.items.length).toBe(1);
    expect(state.items[0].quantity).toBe(1);

    mutations.addToCart(state, products[0]);
    mutations.addToCart(state, products[1]);
    expect(state.items.length).toBe(2);
    expect(state.items[0].quantity).toBe(2);
    expect(state.items[1].quantity).toBe(1);
  });

  test("removeFromCart", () => {
    state = {
      items: [{ ...products[0], quantity: 1 }],
    };
    expect(state.items.length).toBe(1);

    mutations.removeFromCart(state, "0001");
    expect(state.items.length).toBe(0);
  });

  test("setItemQuantity", () => {
    state = {
      items: [{ ...products[0], quantity: 1 }],
    };
    expect(state.items.length).toBe(1);
    expect(state.items[0].quantity).toBe(1);

    mutations.setItemQuantity(state, { itemId: "0001", quantity: 3 });
    expect(state.items.length).toBe(1);
    expect(state.items[0].quantity).toBe(3);
  });

  test("clearCart", () => {
    state = {
      items: products.map((product) => ({ ...product, quantity: 1 })),
    };
    expect(state.items.length).toBe(2);

    mutations.clearCart(state);
    expect(state.items.length).toBe(0);
  });
});
