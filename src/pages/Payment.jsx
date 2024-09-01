import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Background from "../component/Background";
import Title from "../component/Title";
import Footer from "../component/Footer";
import Logout from '../component/Logout';
import PaymentCard from "../component/PaymentCard";
import PaymentModal from "../component/PaymentModal";
import { fetchPayments } from '../redux/actions/paymentActions';
import { handlePayments } from '../redux/actions/paymentActions';

export default function Payment ({auth}){
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const payments = useSelector((state) => state.payments.payments);

    useEffect(() => {
        dispatch(fetchPayments())
    }, [dispatch]);

    const showModal = (payment) => {
        setSelectedPayment(payment);
        setShow(true);
    }

    const hideModal = () => {
        setShow(false);
        setSelectedPayment(null);
    }

    const pay = (id, totalCash, payment) => {
        if(totalCash === 0 || totalCash < payment){
            alert('Cash not enough!');
        } else {
            dispatch(handlePayments(id, totalCash));
            hideModal();
        }
    }

    return(
        <Background>
            {auth? <Logout/> : ''}
            <Title content="Payment"/>
            <div className="grid grid-cols-3 gap-4 pr-5 pl-5">
            {payments.map((data) => (
                data.status === false ? (
                    <div key={data.id}>
                    <PaymentCard data={data} order={data.items} modal={() => showModal(data)} />
                    </div>
                ) : null
                ))}
            </div>
            {show && selectedPayment && <PaymentModal payment={selectedPayment} func={pay} display={hideModal} />}
            <Footer/>
        </Background>
    )
}

Payment.propTypes = {
    auth: PropTypes.bool
}