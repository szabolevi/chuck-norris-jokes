import { config } from "../config";

export type Categories = string[];

export  const fetchCategories = async (): Promise<Categories> => {
    const response = await fetch(`${config.apiUrl}/jokes/categories/`)
    const data = await response.json()

    return data
  }