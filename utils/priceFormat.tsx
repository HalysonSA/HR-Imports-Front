const PriceFormat = (price: number) => {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);

    return formattedPrice;
};
export default PriceFormat;
