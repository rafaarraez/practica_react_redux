import React from 'react';
import { connect, useSelector } from 'react-redux';

function CantidadPokemon(props) {

    const game_shop = useSelector((state) => state.game_shop)

    return(
        <React.Fragment>
            Unidades: {game_shop.pokemon}
        </React.Fragment>
    );
}

// const mapStateToPorps = (state) => {
//     return{
//         game_shop: state.game_shop
//     }
// }

// export default connect(mapStateToPorps)(CantidadPokemon);

export default CantidadPokemon;