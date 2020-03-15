import React, { useContext, useState } from 'react';
import { CarContext } from '../contexts/CarContext';

const CarForm = () => {
    const { addCar } = useContext(CarContext)
    const [placa, setPlaca] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [quilometragem, setQuilometragem] = useState('');
    const handleAddCar = (e) => {
        e.preventDefault();
        addCar(placa, marca, modelo, ano, quilometragem);
        setPlaca('');
        setMarca('');
        setModelo('');
        setAno('');
        setQuilometragem('');
    }
    return (
        <form onSubmit={handleAddCar}>
            <input
                type="text"
                placeholder="Placa..."
                value={placa}
                onChange={(e) => setPlaca(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Marca..."
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Modelo..."
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Ano..."
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Quilometragem..."
                value={quilometragem}
                onChange={(e) => setQuilometragem(e.target.value)}
                required
            />
            <input type="submit" value="add car" />
        </form>
    );
}

export default CarForm
