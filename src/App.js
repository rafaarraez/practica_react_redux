import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import pokemonImg from './img/pokemon.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CantidadPokemon from './components/CantidadPokemon';
import ComprarPokemon from './components/ComprarPokemon';
import store from './redux/store';
import BuscadorPokemon from './components/Buscador/BuscadorPokemon';
import ResultadoPokemon from './components/Buscador/ResultadoPokemon';

function App() {

  
  return (
    <Provider store={store}>
		<div className="App">
			<div className="row">
				<div className="col-12">
					<div className="card mt-5" style={{maxWidth: '370px'}} >
						<div className="row no-gutters">
							<div className="col-4">
								<img src={pokemonImg} alt="pokemon" className="card-img"/>
							</div>

							<div className="col-8">
								<div className="card-body">
									<div className="card-title h3 text-center">
										<CantidadPokemon />
										<ComprarPokemon />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 mt-4 border-top pt-3">
					<BuscadorPokemon />
				</div>
				<div className="col-12">
					<ResultadoPokemon />
				</div>
			</div>
		</div>
    </Provider>
  );
}

export default App;
