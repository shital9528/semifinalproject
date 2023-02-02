// For Add Item to cart
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

// For delete item from cart
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}

export const delCrt = (product) => {
    return{
        type : "HAPUS",
        payload : product
    }

}

export const addfav = (product) => {
    return{
        type : "FAVITEM",
        payload : product
    }
}
