import React from 'react';

const Food = ({ selectedFood }) => {
    const { name, img, price } = selectedFood;
    return (
        <div>
            <img className='w-80' src={img} alt="" />
            <p className='text-xl'>{name}</p>
            <p className='text-2xl font-semibold'>${price}</p>
        </div>
    );
};

export default Food;