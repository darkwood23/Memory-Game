import { useEffect, useState } from "react"
import axios from "axios"
import { v4 as uuid4} from 'uuid'

function Fetcher() {
    const [pokemons, setPokemon] = useState(
        [
            {name: "pikachu", id: uuid4(), image: ""},
            {name: "alakazam", id: uuid4(), image: ""},
            {name: "alomomola", id: uuid4(), image: ""},
            {name: "bayleef", id: uuid4(), image: ""},
            {name: "cacturne", id: uuid4(), image: ""},
            {name: "haunter", id: uuid4(), image: ""},
            {name: "exeggutor", id: uuid4(), image: ""},
            {name: "electabuzz", id: uuid4(), image: ""},
            {name: "psyduck", id: uuid4(), image: ""},
            {name: "cascoon", id: uuid4(), image: ""},
            {name: "gengar", id: uuid4(), image: ""},
            {name: "zapdos", id: uuid4(), image: ""},
        ]
    )

    const [images, setImages] = useState([])

    pokemons.map((pokemon) => {
        useEffect(() => {
            getData(pokemon.name)
        }, [])
    })

    async function getData(name) {
        await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
            // console.log(response.data.name)
            setImages((img) => [...img, response.data.sprites.other.dream_world.front_default])
            // const newPoki = [...pokemons, pokemons[0].image = response.data.sprites.other.dream_world.front_default]
        })
    }

    return (
        <div id="cell-holder">
            {pokemons.map((poke, index) => {
                return (
                    <div className="cell" key={poke.id}>
                        <img src={images[index]} alt="" className="pokemon-images"/>
                        <h2 className="pokemon-names">{poke.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}


export default Fetcher 