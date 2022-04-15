import React from 'react';
import dinner1 from '../../../../red-onion/images/dinner/dinner1.png';
import dinner2 from '../../../../red-onion/images/dinner/dinner2.png';
import dinner3 from '../../../../red-onion/images/dinner/dinner3.png';
import dinner4 from '../../../../red-onion/images/dinner/dinner4.png';
import dinner5 from '../../../../red-onion/images/dinner/dinner5.png';
import dinner6 from '../../../../red-onion/images/dinner/dinner6.png';
import Dinner from '../Dinner/Dinner';

const dinners = [
    {
        id: 1,
        name: "dinner1",
        img: dinner1,
        price: 10
    },
    {
        id: 2,
        name: "dinner2",
        img: dinner2,
        price: 10
    },
    {
        id: 3,
        name: "dinner3",
        img: dinner3,
        price: 10
    },
    {
        id: 4,
        name: "dinner4",
        img: dinner4,
        price: 10
    },
    {
        id: 5,
        name: "dinner5",
        img: dinner5,
        price: 10
    },
    {
        id: 6,
        name: "dinner6",
        img: dinner6,
        price: 10
    },
];

const Dinners = () => {
    return (
        <div className='w-3/4 mx-auto grid grid-cols-3 gap-5 place-items-center'>
            {
                dinners.map(dinner => <Dinner key={dinner.id} dinner={dinner}></Dinner>)
            }
        </div>
    );
};

export default Dinners;