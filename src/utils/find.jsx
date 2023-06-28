const checkInWatch = (id, product) => {
    console.log(id)
    console.log(product)
    return product.find(item => item._id === id)
}
export {checkInWatch}