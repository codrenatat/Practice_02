let products = [];

function getProducts(){
    return products;
}

function getProductBlyd(uuid){
    return products.find(products => products.uuid === uuid);
}

function createProduct(prduct){
    products.push(prduct);
    return prduct;
}
function updateProduct(uuid, updatedProduct) {
    const index = products.findIndex(product => product.uuid === uuid);
    if (index !== -1) {
      products[index] = updatedProduct;
      return updatedProduct;
    }
    return null;
}  

function deleteProduct(uuid) {
    const index = products.findIndex(product => product.uuid === uuid);
    if (index !== -1) {
      const deletedProduct = products.splice(index, 1);
      return deletedProduct[0];
    }
    return null;
}
  

