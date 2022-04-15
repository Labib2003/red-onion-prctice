import React from 'react';

const Dinner = ({dinner}) => {
    const {name, img, price} = dinner;
    return (
        <div>
            <img className='w-80' src={img} alt="" />
            <p className='text-xl'>{name}</p>
            <p className='text-2xl font-semibold'>${price}</p>
        </div>
    );
};

export default Dinner;