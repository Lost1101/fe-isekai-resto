import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile } from '../redux/actions/authActions';
import PropTypes from 'prop-types';
import Button from './Button';
import { FaTrash } from "react-icons/fa";

export default function CardUser({data, func1, func2}){
    const dispatch = useDispatch();
    const uid = useSelector((state) => state.auth.id);
    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch]);

    return(
        <div>
            <div className='w-fit m-auto'>
                <Button content={'+ New User'} morestyle={'m-auto my-5'} onClick={() => func1()}/>
            </div>
            <table className='border-collapse table-auto w-full'>
                <thead>
                    <tr className='text-center border border-b-black'>
                        <td className='px-3'>No</td>
                        <td className='px-3'>Username</td>
                        <td className='px-3'>Name</td>
                        <td className='px-3'>Password</td>
                        <td className='px-3'>Role</td>
                        <td className='px-3'>Action</td>
                    </tr>
                </thead>
                <tbody>
                {data.map((data) => (
                    <tr key={data.id}>
                        <td className='px-3'>{data.id}</td>
                        <td className='px-3'>{data.username}</td>
                        <td className='px-3'>{data.name}</td>
                        <td className='px-3'>{data.password}</td>
                        <td className='px-3'>{data.role}</td>
                        <td className='px-3'>
                            {uid === data.id ? ('') :
                            (<button className='p-2 text-red-600' onClick={() => func2(data.id)}><FaTrash /></button>)}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}


CardUser.propTypes = {
    data: PropTypes.array,
    func1: PropTypes.func.isRequired,
    func2: PropTypes.func.isRequired
}