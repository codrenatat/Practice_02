class ProductException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        let r = Math.random() * 16 | 0;
        let v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Clase Product
class Product {
    constructor(title, description, imageUrl, unit, stock, pricePerUnit, category) {
        this._uuid = generateUUID();
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.unit = unit;
        this.stock = stock;
        this.pricePerUnit = pricePerUnit;
        this.category = category;
    }

    // GETTERS
    get uuid() {
        return this._uuid;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get imageUrl() {
        return this._imageUrl;
    }

    get unit() {
        return this._unit;
    }

    get stock() {
        return this._stock;
    }

    get pricePerUnit() {
        return this._pricePerUnit;
    }

    get category() {
        return this._category;
    }

    // SETTERS
    set uuid(value) {
        throw new ProductException("Product UUIDs are auto-generated.");
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new ProductException("Title must be a non-empty string.");
        }
        this._title = value;
    }

    set description(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new ProductException("Description must be a non-empty string.");
        }
        this._description = value;
    }

    set imageUrl(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new ProductException("Image URL must be a non-empty string.");
        }
        this._imageUrl = value;
    }

    set unit(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new ProductException("Unit must be a non-empty string.");
        }
        this._unit = value;
    }

    set stock(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new ProductException("Stock must be a non-negative number.");
        }
        this._stock = value;
    }

    set pricePerUnit(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new ProductException("Price per unit must be a non-negative number.");
        }
        this._pricePerUnit = value;
    }

    set category(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new ProductException("Category must be a non-empty string.");
        }
        this._category = value;
    }

    static createFromJSON(JSONValue) {
        try {
            const object = JSON.parse(JSONValue);
            return new Product(
                object.title || '',
                object.description || '',
                object.imageUrl || '',
                object.unit || '',
                object.stock || 0,
                object.pricePerUnit || 0,
                object.category || ''
            );
        } catch (error) {
            throw new ProductException("Error parsing the JSON");
        }
    }

    static createFromObject(obj) {
        if (obj instanceof Product) {
            return obj;
        }

        const cleanedObject = Product.cleanObject(obj);

        return new Product(
            cleanedObject.uuid,
            cleanedObject.title,
            cleanedObject.description,
            cleanedObject.imageUrl,
            cleanedObject.unit,
            cleanedObject.stock,
            cleanedObject.pricePerUnit,
            cleanedObject.category
        );
    }

    static cleanObject(obj) {
        const allowedProperties = ['title', 'description', 'imageUrl', 'unit', 'stock', 'pricePerUnit', 'category'];
        const cleanedObject = {};

        for (const prop in obj) {
            if (allowedProperties.includes(prop)) {
                cleanedObject[prop] = obj[prop];
            }
        }

        return cleanedObject;
    }

}

//let stringProduct = '{"title": "Hola", "description":"Hola", "imageUrl": "hello", "unit": "Uno", "stock": 1, "pricePerUnit": 1, "category": "Hola"}';
//console.log(Product.createFromJSON(stringProduct));

