import { ReactElement, useState, useEffect } from "react";
import { Joke, fetchRandomJoke } from "../services/random-joke.service";

interface RandomJokeProps {
    selectedCategory: string;
}

export function RandomJoke({ selectedCategory }: RandomJokeProps): ReactElement {
    const [joke, setJoke] = useState<Joke>()

    useEffect(() => {
        const getRandomJoke = async () => {
            let joke: Joke | undefined;
            try {
              joke = await fetchRandomJoke(selectedCategory);
            } catch (error) {
              console.error('Failed to fetch categories from server', error);
              joke = undefined;
            }
      
            setJoke(joke)
          }
      
          getRandomJoke()
    }, [selectedCategory])

    return (
        <div>
            <p>Joke:</p>
            {joke ? <p>{joke.value}</p> : <p>Loading joke...</p>}
        </div>

    )
}