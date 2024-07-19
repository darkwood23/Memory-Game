import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid4 } from "uuid";

function Fetcher({ reset, increment, level }) {
    const [pokemonNames, setPokemonNames] = useState([
        "pikachu",
        "alakazam",
        "alomomola",
        "bayleef",
        "cacturne",
        "haunter",
        "exeggutor",
        "mewtwo",
        "psyduck",
        "cascoon",
        "gengar",
        "zapdos",
    ]);

    useEffect(() => {
        if (level !== "1") {
            setPokemonNames((prevPoki) => [
                ...prevPoki,
                "charizard",
                "lucario",
                "charmander",
                "darkrai",
                "espeon",
                "blaziken",
            ]);
        }
    }, []);

    const [pokemons, setPokemon] = useState([]);
    const [tempArray, setTempArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const requests = pokemonNames.map(async (pokemon) => {
                    const response = await axios.get(
                        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
                    );
                    return {
                        id: uuid4(),
                        pokeName: pokemon,
                        img: response.data.sprites.front_default,
                    };
                });

                const newPokemonData = await Promise.all(requests);
                
                setPokemon(newPokemonData);
            } catch (error) {
                console.error(error);
            }
        };

        if (pokemonNames.length > 0) {
            fetchData();
        }
    }, [pokemonNames]);

    const createArray = (pok) => {
        let alreadyExists = false;

        for (let i = 0; i <= tempArray.length; i++) {
            if (tempArray[i] === pok) {
                alreadyExists = true;
                setTempArray(() => []);
                reset();
            }
        }

        if (!alreadyExists) {
            setTempArray((tmp) => [...tmp, pok]);
            increment();
        }

        arrange();
    };

    const arrange = () => {
        const shuffledArray = [...pokemons];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        setPokemon(shuffledArray);
    };

    return (
        <div id="cell-holder">
            {pokemons.map((poke) => {
                return (
                    <div
                        className="cell"
                        key={poke.id}
                        name={poke.pokeName}
                        onClick={() => createArray(poke.pokeName)}
                    >
                        <img src={poke.img} alt="" className="pokemon-images" />
                        
                        <h2 className="pokemon-names">{level === "3" ? null : poke.pokeName}</h2>
                        
                    </div>
                );
            })}
        </div>
    );
}

export default Fetcher;
