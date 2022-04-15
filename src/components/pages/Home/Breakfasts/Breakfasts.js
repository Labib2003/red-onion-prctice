import React from 'react';
import breakfast1 from '../../../../red-onion/images/breakfast/breakfast1.png';
import breakfast2 from '../../../../red-onion/images/breakfast/breakfast2.png';
import breakfast3 from '../../../../red-onion/images/breakfast/breakfast3.png';
import breakfast4 from '../../../../red-onion/images/breakfast/breakfast4.png';
import breakfast5 from '../../../../red-onion/images/breakfast/breakfast5.png';
import breakfast6 from '../../../../red-onion/images/breakfast/breakfast6.png';
import Breakfast from '../Breakfast/Breakfast';

const breakfasts = [
    {
        id: 1,
        name: "breakfast1",
        img: breakfast1,
        price: 10
    },
    {
        id: 2,
        name: "breakfast2",
        img: breakfast2,
        price: 10
    },
    {
        id: 3,
        name: "breakfast3",
        img: breakfast3,
        price: 10
    },
    {
        id: 4,
        name: "breakfast4",
        img: breakfast4,
        price: 10
    },
    {
        id: 5,
        name: "breakfast5",
        img: breakfast5,
        price: 10
    },
    {
        id: 6,
        name: "breakfast6",
        img: breakfast6,
        price: 10
    },
];

const Breakfasts = () => {
    return (
        <div>
            {
                breakfasts.map(breakfast => <Breakfast key={breakfast.id} breakfast={breakfast}></Breakfast>)
            }
        </div>
    );
};

export default Breakfasts;