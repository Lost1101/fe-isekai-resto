import PropTypes from 'prop-types';
import { useEffect } from 'react';
import NumberComma from './minilib/numberComma';
import Card from "./Card"
import Button from "./Button"

export default function Checkout({ data, onResetOrder, totalCash, setTotalCash, checkout }){

    useEffect(() => {
        const calculateTotalPrice = () => {
            const total = data.reduce((acc, order) => {
                return acc + order.price;
            }, 0);
            setTotalCash(total);
        };
        calculateTotalPrice();
    }, [data, setTotalCash]);

    return(
        <div className='mt-14'>
            <Card p='p-0'>
            <div className='bg-orange-800 rounded-t-md text-white text-center p-2'>Order List</div>
                <div className='p-5'>
                    {data.map((order, index) => (
                        <div key={index}>
                            <div className='flex justify-between text-sm'><div className='w-1/12'>{order.id}</div> <div className='w-1/2 font-bold'>{order.name}</div> x <div className='w-1/4'>{order.pcs}</div></div>
                        </div>
                    ))}
                        <div className="mt-5">
                            Total Price: <span className='font-bold'>Rp. {NumberComma(totalCash)}</span>
                        </div>
                        <Button content={'Reset'} morestyle={'w-full mt-2'} onClick={() => onResetOrder()}></Button>
                        {data.length === 0 ? ('')
                        : <Button content={'Checkout'} morestyle={'w-full mt-2'} onClick={() => checkout()}></Button>}
                </div>
            </Card>
        </div>
    )
}

Checkout.propTypes = {
    data: PropTypes.array,
    onResetOrder: PropTypes.func,
    totalCash: PropTypes.number,
    setTotalCash: PropTypes.func,
    checkout: PropTypes.func
}