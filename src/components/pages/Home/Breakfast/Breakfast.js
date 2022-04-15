import React from 'react';

const Breakfast = ({breakfast}) => {
    const {name, img, price} = breakfast;
    return (
        <div>
            <img className='w-80' src={img} alt="" />
            <p className='text-xl'>{name}</p>
            <p className='text-2xl font-semibold'>${price}</p>
        </div>
    );
};

export default Breakfast;