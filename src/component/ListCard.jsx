import PropTypes from 'prop-types';
 import Card from "./Card"
 import Button from "./Button"

 export default function ListCard({data, order, func}){
    
    return(
        <Card p="p-5">
            <div className="flex justify-between p-2">
                <span>Table : {data.id_table}</span>
                <span>Waiter: {data.waiter}</span>
            </div>
            <hr className="border border-black"/>
            <div>
                <ul className='pt-5 pb-5'>
                {order.map((item) => (
                    <li key={ item.id } className="flex justify-between">
                        <span className="block">{item.name}</span>
                        <span className="block">x {item.pcs}</span>
                    </li>
                ))}
                </ul>
            </div>
            <Button id={'ListOrder'} content={'Completed'} morestyle={'w-full mt-5'} onClick={() => func(data.id)}/>
        </Card>
    )
 }

ListCard.propTypes={
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        id_table: PropTypes.number.isRequired,
        created: PropTypes.string,
        payment: PropTypes.number,
        status: PropTypes.bool,
        total_cash: PropTypes.number,
        change: PropTypes.number,
        customer: PropTypes.string,
        waiter: PropTypes.string.isRequired,
        status_ord: PropTypes.bool
    }).isRequired,
    order: PropTypes.array.isRequired,
    func: PropTypes.func.isRequired
}