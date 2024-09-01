import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Background from "../component/Background";
import Title from "../component/Title";
import ListCard from '../component/ListCard';
import Logout from '../component/Logout';
import { fetchPayments } from "../redux/actions/paymentActions";
import { handleOrderList } from '../redux/actions/paymentActions';

export default function OrderList ({auth}) {
    const dispatch = useDispatch();
    const orderList = useSelector((state) => state.payments.payments);

    useEffect(() => {
        dispatch(fetchPayments())
    }, [dispatch, orderList]);

    const completeOrder = (id) =>{
        dispatch(handleOrderList(id))
    }

    return(
        <Background>
            {auth? <Logout/> : ''}
            <Title content="List Order"/>
            <div className="p-5 grid grid-cols-3">
            {orderList.map((data) =>(
                data.status_ord === false ? (<ListCard key={data.id} data={data} order={data.items} func={completeOrder}/>) : ('')
            ))}
            </div>
        </Background>
    )
}

OrderList.propTypes = {
    auth: PropTypes.bool
}