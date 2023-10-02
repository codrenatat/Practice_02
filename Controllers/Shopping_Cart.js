class ShoppingCart {
  constructor(products) {
      this._proxies = []; 
      this._products = products; 
  }

  addItem(productUuid, amount) {
      const existingProxy = this._proxies.find(proxy => proxy.productUuid === productUuid);
      if (existingProxy) {
          existingProxy.amount += amount;
      } else {
          this._proxies.push(new ProductProxy(productUuid, amount));
      }
  }

  updateItem(productUuid, newAmount) {
      const existingProxy = this._proxies.find(proxy => proxy.productUuid === productUuid);
      if (!existingProxy) {
          throw new ShoppingCartException("El producto no está en el carrito.");
      }

      if (newAmount < 0) {
          throw new ShoppingCartException("La cantidad no puede ser negativa.");
      } else if (newAmount === 0) {
          const indexToRemove = this._proxies.indexOf(existingProxy);
          this._proxies.splice(indexToRemove, 1);
      } else {
          existingProxy.amount = newAmount;
      }
  }

  removeItem(productUuid) {
      const existingProxy = this._proxies.find(proxy => proxy.productUuid === productUuid);
      if (existingProxy) {
          const indexToRemove = this._proxies.indexOf(existingProxy);
          this._proxies.splice(indexToRemove, 1);
      }
  }

  CalculateTotal() {
    let total = 0;
    for (let proxy of this._proxies) {
      let product = getProductById(this._products, proxy.productUuid);
      if (product) {
        total += proxy.amount * product.pricePerUnit;
      }
    }
    return total;
  }
}

class ProductProxy {
  constructor(productUuid, amount) {
      this.productUuid = productUuid;
      this.amount = amount;
  }
}

class ShoppingCartException {
  constructor(errorMessage) {
      this.errorMessage = errorMessage;
  }
}


