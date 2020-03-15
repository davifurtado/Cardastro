import React, { useContext, useState } from 'react';
import { CarContext } from '../contexts/CarContext';
import CarDetails from './CarDetails';

const CarList = () => {
    const { cars } = useContext(CarContext);
    const [filtroPlaca, setFiltroPlaca] = useState('');
    const filteredCars = filtroPlaca ? cars.filter(car => car.placa.includes(filtroPlaca)) : cars
    return cars.length ? (
        <div>
            <input
            // exemplo de styled JS. Fora do padrão deste projeto mas poderia ter sido feito desta forma, ou até mesmo com styled components
                style={{ width: '50%', margin: '0 5px' }}
                type="text"
                value={filtroPlaca} 
                onChange={(e) => setFiltroPlaca(e.target.value)}
                placeholder="Pesquisar pela placa..."
            />
            {filteredCars.length ?
                <div className="car-list">
                    <ul>
                        { filteredCars.map(car => {
                            return ( <CarDetails car={car} key={car.id} />)
                        })}
                    </ul>
                </div> : <div className="empty" >Nenhum Veículo encontrado </div>
            }
        </div>
    ) : (
        <div className="empty">
            Nenhum veículo cadastrado
        </div>
    )
}

export default CarList