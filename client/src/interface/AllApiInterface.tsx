export interface Iproduct {
    _id: string,
    name: string,
    image: string,
    price: number,
    describe: string,
    categoryId: string
}
export interface Iacount {
    _id: string,
    name: string,
    email: string,
    password: string,
    createdAt: string
    role: string
}
export interface Icategory {
    _id: string,
    name: string,
    products: string
}

export interface Ibank {
    _id: string
    namebank: string,
    numberbank: number,
    username: string,
    content: string
}
