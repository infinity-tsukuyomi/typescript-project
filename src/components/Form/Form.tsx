import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces/car.interface";
import {useAppDispatch} from "../../hooks/redux";
import {addCarThunk} from "../../store/car.slice";

const Form: FC = () => {
    const {handleSubmit, reset, register, setValue} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<ICar> = (car) => {
        dispatch(addCarThunk(car))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;