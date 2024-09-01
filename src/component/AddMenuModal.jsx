import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';

export default function AddMenuModal({display, func, editData}){
    const [name, setName] = useState(editData ? editData.name : '');
    const [price, setPrice] = useState(editData ? editData.price : '');
    const [time, setTime] = useState(editData ? editData.time : '');
    const [stock, setStock] = useState(editData ? editData.stock : '');
    const [category, setCategory] = useState(editData ? editData.category : '');


    return(
        <div className="w-full fixed h-full top-0 z-20">
        <div className='bg-black opacity-75 w-full h-full absolute top-0 left-0'></div>
        <div className='m-auto bg-white rounded-md w-1/3 p-5 relative mt-32 opacity-100'>
            <button className='absolute right-3 top-3' onClick={() => display()}>&#10006;</button>
            <div>
                <h1 className='text-center'>Insert New Data</h1>
                <form onSubmit={(e) => {e.preventDefault()
                    func(name, price, time, stock, category)
                    }}>
                    <Input name='name' type='text' placeholder='Menu name...' value={name} onChange={(e) => setName(e.target.value)} required/>
                    <Input name='price' type='number' placeholder='Price...' value={price} onChange={(e) => setPrice(e.target.value)} required/>
                    <Input name='time' type='number' placeholder='Time...' value={time} onChange={(e) => setTime(e.target.value)} required/>
                    <Input name='stock' type='number' placeholder='Stock...' value={stock} onChange={(e) => setStock(e.target.value)} required/>
                    <div className="mt-4">
        <label className='block font-semibold'>Category : </label>
                        <div className="flex justify-between mt-2">
                            <label className="mr-4">
                                <input className='accent-orange-600' type="radio" name="category" value="food" checked={category === 'food'} onChange={(e) => setCategory(e.target.value)} />
                                <span className="ml-2">Food</span>
                            </label>
                            <label className="mr-4">
                                <input className='accent-orange-600' type="radio" name="category" value="drink" checked={category === 'drink'} onChange={(e) => setCategory(e.target.value)} />
                                <span className="ml-2">Drink</span>
                            </label>
                        </div>
                    </div>
                    <Button type="submit" content={`${editData ? 'Edit' : 'Add'}`} morestyle={'mt-5 w-full'}/>
                </form>
            </div>
        </div>
        </div>
    )
}

AddMenuModal.propTypes={
    display: PropTypes.func.isRequired,
    func: PropTypes.func.isRequired,
    editData: PropTypes.object
}