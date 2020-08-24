import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction';

function ComprarPokemon (){

    const dispatch = useDispatch()
    return (
        <div>
            <button className="btn btn-dark btn-sm my-2" onClick={() => { dispatch(buy_pokemon_action(1)) }} >
                Comprar Pokemon
            </button>
            <button className="btn btn-dark btn-sm" onClick={() => { dispatch(return_pokemon_action(1)) }} >
                Regresar Pokemon
            </button>
        </div> 
    );
}
   

// const mapDispatchToProps = {
//     buy_pokemon_action,
//     return_pokemon_action
// }

// export default connect(null, mapDispatchToProps)(ComprarPokemon);
export default ComprarPokemon;