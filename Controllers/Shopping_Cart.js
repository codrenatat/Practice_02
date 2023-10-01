class ShoppingCart{
    constructor(){
        this.proxies = [];
        this.products = [];
    }

    addItem(productUuid, amount) {
        try {
          const existingProxy = this._proxies.find(proxy => proxy.productUuid === productUuid);
          if (existingProxy) {
            existingProxy.amount += amount;
          } else {
            this._proxies.push(new ProductProxy(productUuid, amount));
          }
        } catch (error) {
          throw new ShoppingCartException(error.message);
        }
      }
    
      updateItem(productUuid, newAmount) {
        try {
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
        } catch (error) {
          throw new ShoppingCartException(error.message);
        }
      }
    
      removeItem(productUuid) {
        try {
          const existingProxy = this._proxies.find(proxy => proxy.productUuid === productUuid);
          if (existingProxy) {
            const indexToRemove = this._proxies.indexOf(existingProxy);
            this._proxies.splice(indexToRemove, 1);
          }
        } catch (error) {
          throw new ShoppingCartException(error.message);
        }
      }
    
      calculateTotal() {
        let total = 0;
        for (const proxy of this._proxies) {
          const product = this._products.find(p => p.uuid === proxy.productUuid);
          if (product) {
            total += proxy.amount * product.pricePerUnit;
          }
        }
        return total;
      }
}

class ProductProxy{
    constructor(productUuid, amount){
        this.productUuid = productUuid;
        this.amount = amount;
    }

    get productUuid(){
        return this._productUuid;
    }

    get amount(){
        return this._amount;
    } 

    set productUuid(value){
        throw new ShoppingCartException("Error");
    }

    set amount(value){
        if(typeof value !== 'number' || value < 0){
            throw new ShoppingCartException("Error")
        }
        this._amount = value;
    }
}

class ShoppingCartException extends Error {
    constructor(message) {
      super(message);
      this.name = 'ShoppingCartException';
    }
  }