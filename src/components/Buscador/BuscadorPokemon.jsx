import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/buscarAction';


function BuscadorPokemon() {

    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState('mewtwo');

    return(
        <div className="form-group">
            <label htmlFor="buscar_pokemon" className="text-white">Buscar Pokemon</label>
            <input type="text" 
                    className="form-control" 
                    id="buscar_pokemon" 
                    value={pokemonName} 
                    onChange={
                        (e) => {
                            setPokemonName(e.target.value)
                        }
                    }
            />
            <button className="btn btn-primary mt-3"
                    onClick={
                        () => {
                            dispatch(fetchPokemon(pokemonName));
                        }
                    }
            >Enviar</button>
        </div>
    );
}

export default BuscadorPokemon;