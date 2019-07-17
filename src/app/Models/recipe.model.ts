export interface Recipe {
    title: string;
    ingredients: string
    href: number;
    thumbnail: string
}

export interface ResponseAPI {
    title: string;
    version: string
    href: string;
    results: Recipe[];
}

