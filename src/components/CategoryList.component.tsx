import { ReactElement } from 'react';
import { Categories } from "../services/categories.service";
import './CategoryList.css';

interface CategoryListProps {
    categories: Categories
    selectedCategory: string | undefined;
    setSelectedCategory: (category: string) => void
}

export function CategoryList({categories, setSelectedCategory, selectedCategory}: CategoryListProps): ReactElement {
    return (
        <ul>
            {categories.map((category, index) => <li key={index} onClick={() => setSelectedCategory(category)}>
                <button className={selectedCategory === category ? 'active' : ''}>{category}</button>
            </li>)}
        </ul>
    )
}
