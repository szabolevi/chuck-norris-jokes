import React from 'react';
import { useState, useEffect } from 'react'
import { Categories, fetchCategories } from './services/categories.service';
import { RandomJoke } from "./components/RandomJoke.component";
import { CategoryList } from "./components/CategoryList.component";

function App() {
  const [categories, setCategories] = useState<Categories>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>();

  useEffect(() => {
    const getCategories = async () => {
      let categoriesFromServer: Categories;
      try {
        categoriesFromServer = await fetchCategories();
      } catch (error) {
        console.error('Failed to fetch categories from server', error);
        // In production code I would set an error flag to true and display some
        // UI that tells the user to refresh/wait a few seconds.
        categoriesFromServer = [];
      }

      setCategories(categoriesFromServer)
    }

    getCategories()
  }, [])


  return (
    <div>
      <p>Choose a category:</p>
      <CategoryList selectedCategory={selectedCategory} categories={categories} setSelectedCategory={setSelectedCategory} />
      {selectedCategory ? <RandomJoke selectedCategory={selectedCategory} /> : <p>You have not selected a category yet.</p>}
    </div>
  );
}

export default App;
