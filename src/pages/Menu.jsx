import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../component/Background';
import CardMenu from '../component/CardMenu';
import Title from '../component/Title';
import Checkout from '../component/Checkout';
import Footer from '../component/Footer';
import { fetchProfile } from '../redux/actions/authActions';
import { fetchMenus } from '../redux/actions/menuActions';
import Logout from '../component/Logout';
import PropTypes from 'prop-types';
import { checkoutOrder } from '../redux/actions/orderActions';


export default function Menu({auth}){
    
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.profile);
    const menus = useSelector((state) => state.menus.menus);

    const [order, setOrder] = useState([]);
    const [customer, setCustomer] = useState('');
    const [table, setTable] = useState(1);
    const [totalCash, setTotalCash] = useState(0)

    const resetOrder = () => {
        setOrder([]);
    };

    const checkout = () =>{
        if (table === null || table <= 0 || customer === ''){
            alert('Please input table/customer first!');
        } else {
            dispatch(checkoutOrder(order, totalCash, user, customer, table));
        }

        setOrder([]);
        setCustomer('');
        setTable(1);
        alert('Order Successful')
    }

    useEffect(() => {
        dispatch(fetchMenus())
        if (auth) {
            dispatch(fetchProfile());
        }
    }, [auth, dispatch]);
    
    return(
        <Background>
            {auth? <Logout/> : ''}
            <Title content='Menu'/>
            {auth ? <p className='text-white text-center mb-5'>Hello, <span className='font-bold'>{user}</span> Keep spirit today!✨</p>
            : ''}
            {auth ? 
            <div className='grid grid-cols-2 w-1/2 m-auto'>
                <input className="block m-auto p-2 mt-5 mb-5 rounded-md border" type="number" placeholder='Table...' value={table} id='table' onChange={(e) => setTable(e.target.value)} required/>
                <input className="block m-auto p-2 mt-5 mb-5 rounded-md border" type="text" placeholder='Customer...' value={customer} id='customer' onChange={(e) => setCustomer(e.target.value)} required/>
            </div>
            : ''}
            <div className={`${auth ? 'flex' : ''}`}>
                <div className={`${auth ? 'pl-3 w-3/4' : 'w-full'}`}>
                    <p className='text-white font-bold text-2xl ml-5 mt-3 mb-3'>Food</p>
                    <div className={`grid ${auth ? 'grid-cols-2' : 'grid-cols-3'} gap-4 pr-5 pl-5`}>
                        {menus.map((data) => (
                            data.category === 'food' ? (
                                <CardMenu data={data} setOrder={setOrder} auth={auth} key={data.id} />
                            ) : null
                        ))}
                    </div>
                    <p className='text-white font-bold text-2xl ml-5 mt-3 mb-3'>Drink</p>
                    <div className={`grid ${auth ? 'grid-cols-2' : 'grid-cols-3'} gap-4 pr-5 pl-5`}>
                        {menus.map((data) => (
                            data.category === 'drink' ? (
                                <CardMenu data={data} setOrder={setOrder} auth={auth} key={data.id} />
                            ) : null
                        ))}
                    </div>
                </div>
                <div className='ml-10'>
                    {auth ? 
                    <Checkout data={order} onResetOrder={resetOrder} totalCash={totalCash} setTotalCash={setTotalCash} checkout={checkout}/> 
                    : ''}
                </div>
            </div>
            <Footer/>
        </Background>
    )
}

Menu.propTypes = {
    auth: PropTypes.bool
}