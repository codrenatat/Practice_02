let products = [Amelia_Dress, Rhae_Sweater,Lia_Sweater, Lia_Sweater, Kate_Heels, Cleo_Necklace, Holli_Cardigan, Daisy_Pants, Ophelia_Dress];

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

function updateProduct(uuid, updateProduct){
    const index = products.findIndex(products => products.uuid === uuid);
    if(index !== -1){
        const deletedProduct = products.splice(index, 1);
        return deletedProduct[0];
    }
    return null;
}
