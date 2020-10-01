import axios from 'axios';

// +-Constants:_
const dataInicial = {
    array: [],
};

const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';

// +-Reducers:_
export default function pokeReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_POKEMONS_SUCCESS:
            return { ...state, array: action.payload };
        default:
            return state;
    }
}

// +-Actions:_
/**+-A continuación se van a Utilizar 2 Funciones de Flecha Porque en la 1ra Función vamos a recibir los Parámetros que se van a enviar a "getPokemonsAction" y en la
 * 2da Función vamos a recibir los Parámetros "dispatch" para activar el Reducer "pokeReducer" y "getState" para obtener la Información de "dataInicial".
 * +-Al igual que cada vez que se llama a una API, vamos a usar async-await y además vamos a usar "axios".*/
export const getPokemonsAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(
            'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
        );
        dispatch({
            type: GET_POKEMONS_SUCCESS,
            payload: res.data.results,
        });
    } catch (error) {
        console.log(error);
    }
};
