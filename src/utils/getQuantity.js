const getQuantity = (items) => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
}
export default getQuantity