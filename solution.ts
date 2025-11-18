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



class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
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



interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive);
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (input: Book): string => {
    return (`Title ${input.title} Author: ${input.author}, Published: ${input.publishedYear}, Available: ${input.isAvailable ? "Yes" : "No"}"`)
}


const getUniqueValues = (arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] => {
    let result: (number | string)[] = [];
    const isExists = (value: number | string): boolean => {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) {
                return true;
            }
        }
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!isExists(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    // Add values from second array
    for (let i = 0; i < arr2.length; i++) {
        if (!isExists(arr2[i])) {
            result.push(arr2[i]);
        }
    }
    return result;
}



type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};
const calculateTotalPrice = (products: Product[]) => {
    if (products.length === 0) {
        return 0
    }
    let eachProductArr: number[] = [];
    products.map(product => {
        const productTotal = product.price * product.quantity;

        const finalAmount = product.discount && product.discount > 0
            ? productTotal - (productTotal * product.discount) / 100
            : productTotal;

        eachProductArr.push(finalAmount);
    });
    const totalAmount = eachProductArr.reduce((sum, current) => sum + current, 0)
    return totalAmount;
};