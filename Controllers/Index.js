let product = {
  title: "Prod 1",
  description: "Descripcion 1",
  imageUrl: "IMAGES",
  unit: 'pieza',
  stock: 1,
  pricePerUnit: 15,
  category: "Categoría A",
}

let produc = {
  title: "Prod2",
  description: "Descripcion 1",
  imageUrl: "IMAGES",
  unit: 'pieza',
  stock: 1,
  pricePerUnit: 15,
  category: "Categoría A",
}

let produ = {
  title: "Prod3",
  description: "Descripcion 1",
  imageUrl: "IMAGES",
  unit: 'pieza',
  stock: 1,
  pricePerUnit: 15,
  category: "Categoría A",
}

let prod = {
  title: "Prod4",
  description: "Descripcion 1",
  imageUrl: "IMAGES",
  unit: 'pieza',
  stock: 1,
  pricePerUnit: 15,
  category: "Categoría A",
}

let pro = {
  title: "Prod5",
  description: "Descripcion 1",
  imageUrl: "IMAGES",
  unit: 'pieza',
  stock: 1,
  pricePerUnit: 15,
  category: "Categoría A",
}

product1 = createProduct(product);
product2 = createProduct(produc);
product3 = createProduct(produ);
product4 = createProduct(prod);



console.table(getProducts())

product5 = Product.createFromObject(pro);
updateProduct(product1._uuid,product5);

console.table(getProducts());

deleteProduct(product3._uuid);
console.table(getProducts());

let SCart = new ShoppingCart(getProducts());
SCart.addItem(product1._uuid, 3);
SCart.addItem(product2._uuid, 2);
SCart.addItem(product3._uuid, 1);
console.table(SCart._proxies);

SCart.updateItem(product1._uuid, 10);
console.table(SCart._proxies);
SCart.updateItem(product2._uuid, 0);
console.table(SCart._proxies);
//SCart.updateItem(product3._uuid, -2);

let total =SCart.CalculateTotal();
console.log(total);
