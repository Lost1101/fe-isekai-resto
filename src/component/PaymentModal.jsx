import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import NumberComma from './minilib/numberComma';

export default function PaymentModal({payment, display, func}){
    const [cash, setCash] = useState(0);

    return(
        <div className='w-full fixed h-full top-0 z-20'>
            <div className='bg-black opacity-75 w-full h-full absolute top-0 left-0'></div>
            <div className='m-auto bg-white rounded-md w-1/3 p-5 relative mt-32 opacity-100'>
                <button className='absolute right-3 top-3' onClick={() => display()}>&#10006;</button>
                <h1 className='text-center font-bold text-2xl p-5'>Payment</h1>
                <p>Id Payment : {payment.id}</p>
                <p>Customer : {payment.customer}</p>
                <p>Payment: {NumberComma(payment.payment)}</p>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    func(payment.id, cash, payment.payment);
                }}>
                    <Input name='payment' type='number' placeholder='Insert cash here...' value={cash} onChange={(e) => setCash(e.target.value)} required/>
                    <Button type="submit" content={'Pay'} morestyle={'w-full mt-5'}/>
                </form>
            </div>
        </div>
    )
}

PaymentModal.propTypes={
    payment: PropTypes.object.isRequired,
    display: PropTypes.func.isRequired,
    func: PropTypes.func.isRequired
}