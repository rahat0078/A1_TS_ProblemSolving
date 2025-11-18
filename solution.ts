const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === "string") {
        return value.toUpperCase()
    } else if (typeof value === "number") {
        const multiple = value * 10;
        return multiple
    } else if (typeof value === "boolean") {
        return !value
    }
    return value
}

const getLength = (input: string | []): number => {
    if (typeof input === "string") {
        const totalChar = input.length;
        return totalChar;
    } else if (Array.isArray(input)) {
        return input.length
    }
    return input
}


interface ProductInfo {
    title: string;
    rating: number;
}

const filterByRating = (items: ProductInfo[]): ProductInfo[] => {
    const result = items.filter(i => {
        if (i.rating < 0 || i.rating > 5) {
            return 'Rating not valid'
        }
        return i.rating >= 4;
    })
    return result
};
