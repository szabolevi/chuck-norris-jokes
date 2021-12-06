import { config } from "../config";
import { Categories } from "./categories.service";

export interface Joke {
    id: string;
    value: string;
    url: string;
    icon_url: string;
    categories: Categories;
    created_at: string;
    updated_at: string;
}

export async function fetchRandomJoke(category: string): Promise<Joke> {
    const response = await fetch(`${config.apiUrl}/jokes/random?category=${category}`);
    const json = await response.json() as Joke;

    return json;
}