import PropTypes from 'prop-types';
import Button from './Button';
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function CardMenuAdmin({data, func1, func2}){
    return(
        <div>
            <div className='w-fit m-auto'>
                <Button content={'+ New Menu'} morestyle={'m-auto my-5'} onClick={() => func1()}/>
            </div>
            <table className='border-collapse table-auto w-full'>
                <thead>
                    <tr className='text-center border border-b-black'>
                        <td className='px-3'>No</td>
                        <td className='px-3'>Name</td>
                        <td className='px-3'>Price</td>
                        <td className='px-3'>Time</td>
                        <td className='px-3'>Stock</td>
                        <td className='px-3'>Category</td>
                        <td className='px-3'>Action</td>
                    </tr>
                </thead>
                <tbody className='text-center'>
                {data.map((data) => (
                    <tr key={data.id}>
                        <td className='px-3'>{data.id}</td>
                        <td className='px-3'>{data.name}</td>
                        <td className='px-3'>{data.price}</td>
                        <td className='px-3'>{data.time}</td>
                        <td className='px-3'>{data.stock}</td>
                        <td className='px-3'>{data.category}</td>
                        <td className='px-3'>
                            <button className='p-2 text-blue-600' onClick={() => func1(data)}><FaEdit /></button>
                            <button className='p-2 text-red-600' onClick={() => func2(data.id)}><FaTrash /></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}


CardMenuAdmin.propTypes = {
    data: PropTypes.array,
    func1: PropTypes.func,
    func2: PropTypes.func,
}