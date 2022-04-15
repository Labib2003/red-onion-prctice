import React, { useState } from 'react';

import breakfast1 from '../../../../red-onion/images/breakfast/breakfast1.png';
import breakfast2 from '../../../../red-onion/images/breakfast/breakfast2.png';
import breakfast3 from '../../../../red-onion/images/breakfast/breakfast3.png';
import breakfast4 from '../../../../red-onion/images/breakfast/breakfast4.png';
import breakfast5 from '../../../../red-onion/images/breakfast/breakfast5.png';
import breakfast6 from '../../../../red-onion/images/breakfast/breakfast6.png';
import lunch1 from '../../../../red-onion/images/lunch/lunch1.png';
import lunch2 from '../../../../red-onion/images/lunch/lunch2.png';
import lunch3 from '../../../../red-onion/images/lunch/lunch3.png';
import lunch4 from '../../../../red-onion/images/lunch/lunch4.png';
import lunch5 from '../../../../red-onion/images/lunch/lunch5.png';
import lunch6 from '../../../../red-onion/images/lunch/lunch6.png';
import dinner1 from '../../../../red-onion/images/dinner/dinner1.png';
import dinner2 from '../../../../red-onion/images/dinner/dinner2.png';
import dinner3 from '../../../../red-onion/images/dinner/dinner3.png';
import dinner4 from '../../../../red-onion/images/dinner/dinner4.png';
import dinner5 from '../../../../red-onion/images/dinner/dinner5.png';
import dinner6 from '../../../../red-onion/images/dinner/dinner6.png';
import Food from '../Food/Food';

const foods = [
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
    {
        id: 7,
        name: "lunch1",
        img: lunch1,
        price: 10
    },
    {
        id: 8,
        name: "lunch2",
        img: lunch2,
        price: 10
    },
    {
        id: 9,
        name: "lunch3",
        img: lunch3,
        price: 10
    },
    {
        id: 10,
        name: "lunch4",
        img: lunch4,
        price: 10
    },
    {
        id: 11,
        name: "lunch5",
        img: lunch5,
        price: 10
    },
    {
        id: 12,
        name: "lunch6",
        img: lunch6,
        price: 10
    },
    {
        id: 13,
        name: "dinner1",
        img: dinner1,
        price: 10
    },
    {
        id: 14,
        name: "dinner2",
        img: dinner2,
        price: 10
    },
    {
        id: 15,
        name: "dinner3",
        img: dinner3,
        price: 10
    },
    {
        id: 16,
        name: "dinner4",
        img: dinner4,
        price: 10
    },
    {
        id: 17,
        name: "dinner5",
        img: dinner5,
        price: 10
    },
    {
        id: 18,
        name: "dinner6",
        img: dinner6,
        price: 10
    }
];

const breakfasts = foods.filter(food => food.name.includes("breakfast"));

const Foods = () => {
    const [selectedFoodClass, setSelectedFoodClass] = useState(breakfasts);

    const handleChangeFoodClass = (foodClass) => {
        const selectedFoods = foods.filter(food => food.name.includes(foodClass));
        setSelectedFoodClass(selectedFoods);
    }

    return (
        <div>
            <div className='w-1/3 mx-auto flex justify-around my-5 text-xl font-semibold'>
                <p onClick={() => handleChangeFoodClass("breakfast")}>Breakfast</p>
                <p onClick={() => handleChangeFoodClass("lunch")}>Lunch</p>
                <p onClick={() => handleChangeFoodClass("dinner")}>Dinner</p>
            </div>
            <div className='w-3/4 mx-auto grid grid-cols-3 gap-5 place-items-center'>
                {
                    selectedFoodClass.map(selectedFood => <Food key={selectedFood.id} selectedFood={selectedFood}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;