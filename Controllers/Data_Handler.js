class ProductDataHandler {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(uuid) {
      return this.products.find(product => product.uuid === uuid);
    }
  
    createProduct(title, category) {
      const product = {
        uuid: uuidv4(), // You can use a UUID generation library or method here
        title,
        category,
      };
      this.products.push(product);
      return product;
    }
  
    updateProduct(uuid, updatedProduct) {
      const index = this.products.findIndex(product => product.uuid === uuid);
      if (index !== -1) {
        this.products[index] = { ...updatedProduct, uuid }; // Maintain the original UUID
        return this.products[index];
      }
      return null;
    }
  
    deleteProduct(uuid) {
      const index = this.products.findIndex(product => product.uuid === uuid);
      if (index !== -1) {
        const deletedProduct = this.products.splice(index, 1);
        return deletedProduct[0];
      }
      return null;
    }
  
    findProduct(query) {
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
}

/*
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
*/