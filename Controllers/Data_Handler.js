let products = [];

function getProducts() {
  return products;
}

function getProductById(uuid) {
  return products.find(product => product.uuid === uuid);
}

function createProduct(product) {
  const var1 = Product.createFromObject(product)
  products.push(var1);
  return var1;
}

function updateProduct(uuid, updatedProduct) {
  const index = products.findIndex(product => product.uuid === uuid);
  products[index] = updatedProduct;
}

function deleteProduct(uuid) {
  const index = products.findIndex(product => product.uuid === uuid);
  if (index !== -1) {
    products.splice(index, 1);
  }
  return null;
}

function findProduct(query) {
  const [category, title] = query.split(':').map(str => str.trim());
  if (!category && !title) {
    return [];
  }

  if (category && title) {
    return this.products.filter(
      product => product.category.includes(category) && product.title.includes(title)
    );
  } else if (category) {
    return this.products.filter(product => product.category.includes(category));
  } else if (title) {
    return this.products.filter(product => product.title.includes(title));
  }
  return [];
}
