const getTotalPrice = (items) => {
    return items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
}
export default getTotalPrice;