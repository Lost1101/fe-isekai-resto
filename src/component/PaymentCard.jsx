import Card from "./Card";
import IsekaiResto from "./IsekaiResto";
import Button from "./Button";
import NumberComma from "./minilib/numberComma";
import { GiFishCooked } from "react-icons/gi";
import PropTypes from 'prop-types';

export default function PaymentCard ({ data, order, modal }) {
    return(
        <div>
            <Card>
                <div className="text-center">
                    <GiFishCooked className="text-center inline-block text-4xl"/> 
                    <IsekaiResto color="text-black"/>
                </div>
                <hr className="border border-black mt-4 mb-4"/>
                <div>
                    <span className="block text-center">Created at: {data.created}</span>
                    <div className="flex justify-evenly">
                        <span className="block">Table: {data.id_table}</span>
                        <span className="block">Customer: {data.customer}</span>
                    </div>
                    <hr className="border border-black mt-4 mb-4"/>
                    <div>
                        <ul>
                        {order.map((item) => (
                                <li key={item.id} className="flex justify-between">
                                    <span className="block">{item.name}</span>
                                    <span className="block">x {item.pcs}</span>
                                    <span className="block">{NumberComma(item.price)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr className="border border-black mt-4 mb-4"/>
                    <div className="flex justify-between">
                        <span className="block">Total:</span><span className="block">{NumberComma(data.payment)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="block">Cash:</span><span className="block">{NumberComma(data.total_cash)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="block">Change:</span><span className="block">{NumberComma(data.change)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="block">Status:</span><span className="block">{data.status ? 'Paid' : 'No Paid'}</span>
                    </div>
                    <Button id={'paymentCard'} key={data.id} content={'Pay'} morestyle={'w-full mt-5'} onClick={() => modal()}/>
                </div>
            </Card>
        </div>
    );
}

PaymentCard.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        id_table: PropTypes.number.isRequired,
        created: PropTypes.string.isRequired,
        payment: PropTypes.number.isRequired,
        status: PropTypes.bool.isRequired,
        total_cash: PropTypes.number,
        change: PropTypes.number,
        customer: PropTypes.string.isRequired,
    }).isRequired,
    order: PropTypes.array.isRequired,
    modal: PropTypes.func.isRequired
};