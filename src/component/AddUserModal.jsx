import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';

export default function AddUserModal({display, func}){
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    return(
        <div className="w-full fixed h-full top-0 z-20">
        <div className='bg-black opacity-75 w-full h-full absolute top-0 left-0'></div>
        <div className='m-auto bg-white rounded-md w-1/3 p-5 relative mt-32 opacity-100'>
            <button className='absolute right-3 top-3' onClick={() => display()}>&#10006;</button>
            <div>
                <h1 className='text-center'>Insert New Data</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    func(username, name, password, role);
                }}>
                    <Input name='username' type='text' placeholder='Username...' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <Input name='name' type='text' placeholder='Person Name...' value={name} onChange={(e) => setName(e.target.value)} required/>
                    <Input name='password' type='password' placeholder='Password...' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <div className="mt-4">
        <label className='block font-semibold'>Role:</label>
                        <div className="flex justify-between mt-2">
                            <label className="mr-4">
                                <input className='accent-orange-600' type="radio" name="role" value="admin" checked={role === 'admin'} onChange={(e) => setRole(e.target.value)} />
                                <span className="ml-2">Admin</span>
                            </label>
                            <label className="mr-4">
                                <input className='accent-orange-600' type="radio" name="role" value="waiter" checked={role === 'waiter'} onChange={(e) => setRole(e.target.value)} />
                                <span className="ml-2">Waiter</span>
                            </label>
                            <label>
                                <input className='accent-orange-600' type="radio" name="role" value="cashier" checked={role === 'cashier'} onChange={(e) => setRole(e.target.value)} />
                                <span className="ml-2">Cashier</span>
                            </label>
                        </div>
                    </div>
                    <Button type="submit" content={'Add'} morestyle={'mt-5 w-full'}/>
                </form>
            </div>
        </div>
        </div>
    )
}

AddUserModal.propTypes={
    display: PropTypes.func.isRequired,
    func: PropTypes.func.isRequired
}