import { useEffect, useState } from "react"
import axios from "axios"
import { v4 as uuid4} from 'uuid'

function Fetcher(props) {
    const [images, setImages] = useState({})
    const [pokemons, setPokemon] = useState(
        [
            {pokeName: "pikachu", id: uuid4(), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"},
            {pokeName: "alakazam", id: uuid4(), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/65.svg"},
            {pokeName: "alomomola", id: uuid4(), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/594.svg"},
            {pokeName: "bayleef", id: uuid4(), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/153.svg"},
            {pokeName: "cacturne", id: uuid4(), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/332.svg"},
            {pokeName: "haunter", id: uuid4(), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg"},
            {pokeName: "exeggutor", id: uuid4(), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/103.svg"},
            {pokeName: "electabuzz", id: uuid4(), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/125.svg"},
            {pokeName: "psyduck", id: uuid4(), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg"},
            {pokeName: "cascoon", id: uuid4(), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/268.svg"},
            {pokeName: "gengar", id: uuid4(), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg"},
            {pokeName: "zapdos", id: uuid4(), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/145.svg"},
        ]
    )
    const [tempArray, setTempArray] = useState([])
    const [randomizedArray, setRandomizedArray] = useState([...pokemons])

    const createArray = (pok) => {
        let alreadyExists = false

        for(let i = 0; i <= tempArray.length; i++) {
            if(tempArray[i] === pok) {
                alreadyExists = true
                setTempArray(() => [])
                props.reset()
            }
        }

        if(!alreadyExists) {
            setTempArray((tmp) => [...tmp, pok])
            props.increment()
        }

        arrange()
    }

    const arrange = () => {
        const shuffledArray = [...randomizedArray];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        setPokemon(shuffledArray);
    }

    return (
        <div id="cell-holder">
            {pokemons.map((poke) => {
                return (
                    <div className="cell" key={poke.id} name={poke.pokeName} onClick={() => createArray(poke.pokeName)}>
                        <img src={poke.img} alt="" className="pokemon-images"/>
                        <h2 className="pokemon-names">{poke.pokeName}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Fetcher 