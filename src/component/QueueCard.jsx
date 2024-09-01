import Card from "./Card"
import PropTypes from 'prop-types';

export default function QueueCard ({ data }){
    return(
        <div>
            <Card p="p-2">
                <div className="text-center">
                    <h1 className="text-xl font-semibold text-gray-600"> Table</h1>
                    <span className="text-9xl font-bold block">{data.id_table}</span>
                    <span className="text-lg block">{data.customer}</span>
                </div>
            </Card>
        </div>
    )
}

QueueCard.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        id_table: PropTypes.number.isRequired,
        status: PropTypes.bool.isRequired,
        customer: PropTypes.string.isRequired,
    }).isRequired
};