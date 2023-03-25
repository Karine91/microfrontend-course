import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-products");

  // Assuming our container doesn't have an element
  // with dev-products id
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

export { mount };
