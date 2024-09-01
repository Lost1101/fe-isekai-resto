import { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import PlusMinus from "./PlusMinus";
import NumberComma from "./minilib/numberComma";
import { IoIosTime } from "react-icons/io";
import PropTypes from 'prop-types';
import image from './img/food.png'

export default function CardMenu({ data, setOrder, auth }){
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(data.price);
    
    useEffect(() => {
        setPrice(data.price * count);
    }, [count, data]);

    function handleOrder () {
        const newOrderItem = {
            id: data.id,
            name: data.name,
            price: price,
            pcs: count
        };
        setOrder((prevOrder) => [...prevOrder, newOrderItem]);
        setCount(1);
    }

    return(
        <Card p="p-1">
            <div className="bg-white rounded-md flex justify-evenly">
                <div className="mt-2">
                    <img src={image} alt="image" className="w-24 rounded-md"/>
                    {auth ? <Button content='Order' morestyle={'m-auto mt-3 w-full'} onClick={() => handleOrder()}/> : ''}
                </div>
                <div className="p-5 w-3/4">
                    <h1 className="font-bold text-lg">{data.name}</h1>
                    <div className="mt-5">
                        {auth ? <PlusMinus data={count} max={data.stock} setData={setCount} id={data.id}/> : <p className="text-red-500">Login lirst to order</p>}
                        <div className="mt-5">
                            <span className="text-gray-400 text-xs"><IoIosTime className="inline-block mr-1" />{data.time} min</span>
                            <span className="mr-5 ml-5 font-semibold text-xs">Rp. {NumberComma(price)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

CardMenu.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        time: PropTypes.number.isRequired,
    }).isRequired,
    setOrder: PropTypes.func,
    order: PropTypes.object,
    auth: PropTypes.bool
};