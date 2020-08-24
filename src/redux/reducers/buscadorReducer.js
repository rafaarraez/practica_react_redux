import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from "../actions/buscarAction";

const initialState = {
    loading: false,
    pokemon: [],
    error: ''
}

const buscador = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POKEMON_REQUEST: {
            return{
                ...state,
                loading: true
            }
        }

        case FETCH_POKEMON_SUCCESS: {
            return{
                error: '',
                loading: false,
                pokemon: action.payload
            }
        }

        case FETCH_POKEMON_FAILURE: {
            return{
                pokemon: [],
                loading: false,
                error: action.payload
            }
        }
        default: return state;
    }
}

export default buscador;