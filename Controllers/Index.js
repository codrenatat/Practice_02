/*// Importa las clases y funciones necesarias
import { Product, ShoppingCart, ProductProxy, ShoppingCartException } from './Controllers';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '..Controllers/Data_Handler';

// Pruebas para la clase Product
try {
  // Crear productos
  const product1 = new Product('Platano', 'Los mejores platanos de México, directo desde Tabasco.', 'https://images.freeimages.com/images/large-previews/4ec/banana-s1326714.jpg', 'pieza', 15, 3.6, 'Fruta');
  const product2 = new Product('Manzana', 'Manzanas frescas de la región', 'https://images.freeimages.com/images/large-previews/abc/red-apples-1-1400229.jpg', 'pieza', 20, 2.5, 'Fruta');

  // Mostrar información de productos
  console.log('Información del producto 1:');
  console.table(product1);

  console.log('Información del producto 2:');
  console.table(product2);

  // Actualizar el producto 1
  product1.setTitle('Banana');
  product1.setPricePerUnit(4.0);

  console.log('Producto 1 actualizado:');
  console.table(product1);
} catch (error) {
  console.error('Error en la prueba de Product:', error.message);
}

// Pruebas para la clase ShoppingCart
try {
  // Crear productos
  const product1 = new Product('Platano', 'Los mejores platanos de México, directo desde Tabasco.', 'https://images.freeimages.com/images/large-previews/4ec/banana-s1326714.jpg', 'pieza', 15, 3.6, 'Fruta');
  const product2 = new Product('Manzana', 'Manzanas frescas de la región', 'https://images.freeimages.com/images/large-previews/abc/red-apples-1-1400229.jpg', 'pieza', 20, 2.5, 'Fruta');

  // Crear carrito de compras
  const shoppingCart = new ShoppingCart();

  // Agregar productos al carrito
  shoppingCart.addItem(product1.getUUID(), 5);
  shoppingCart.addItem(product2.getUUID(), 3);

  // Mostrar el carrito de compras
  console.log('Contenido del carrito de compras:');
  console.table(shoppingCart.getCart());

  // Actualizar la cantidad de un producto en el carrito
  shoppingCart.updateItem(product1.getUUID(), 8);

  // Mostrar el carrito actualizado
  console.log('Carrito de compras actualizado:');
  console.table(shoppingCart.getCart());

  // Calcular el total
  const total = shoppingCart.calculateTotal();
  console.log('Total de la compra: $' + total);

  // Eliminar un producto del carrito
  shoppingCart.removeItem(product2.getUUID());

  // Mostrar el carrito después de eliminar un producto
  console.log('Carrito de compras después de eliminar un producto:');
  console.table(shoppingCart.getCart());
} catch (error) {
  console.error('Error en la prueba de ShoppingCart:', error.message);
}

// Pruebas para las funciones de manejo de datos
try {
  // Obtener lista de productos
  const productsList = getProducts();
  console.log('Lista de productos:');
  console.table(productsList);

  // Obtener un producto por ID
  const productId = 'df2008a5-1c40-4dd1-9db7-8aacc03ae2fb';
  const product = getProductById(productId);
  console.log(`Producto con ID ${productId}:`);
  console.table(product);

  // Crear un nuevo producto
  const newProduct = new Product('Naranja', 'Naranjas frescas de Valencia', 'https://images.freeimages.com/images/large-previews/535/orange-fruit-1326289.jpg', 'pieza', 30, 2.0, 'Fruta');
  createProduct(newProduct);

  // Mostrar la lista de productos actualizada
  console.log('Lista de productos después de agregar uno nuevo:');
  console.table(getProducts());
} catch (error) {
  console.error('Error en la prueba de funciones de manejo de datos:', error.message);
}
*/