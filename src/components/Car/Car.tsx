import React, {FC} from 'react';

import {ICar} from '../../interfaces/car.interface'

const Car: FC<{ car: ICar }> = ({car}) => {
    const {id, model, price, year} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
        </div>
    );
};

export default Car;