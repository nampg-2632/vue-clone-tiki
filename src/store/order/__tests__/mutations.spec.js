import mutations from "../mutations";

let state;

beforeEach(() => {
  state = [];
});

describe("store/order/mutations.js", () => {
  test("createOrder", () => {
    const customer = {
      firstName: "Giang",
      lastName: "Nam",
    };
    const items = [
      {
        _id: "0001",
        discount: {
          unit: "%",
          value: 50,
        },
        id: "0001",
        imgUrl:
          "https://salt.tikicdn.com/cache/w200/ts/product/cb/12/d5/af8325d164146466046581d008b7b781.jpg",
        name: "Đèn pin mini siêu sáng",
        price: 86000,
        quantity: 1,
        sku: "A0001",
        sold: 100,
        star: 4,
      },
    ];

    mutations.createOrder(state, { items, customer });
    expect(state[0].totalPrice).toBe(86000);
  });
});
