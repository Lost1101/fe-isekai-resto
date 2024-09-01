import PropTypes from 'prop-types';

export default function Button({ content, id, morestyle, onClick, type}) {
    return (
        <button id={id} onClick={onClick} type={type} className={`pl-4 pr-4 p-2 bg-orange-500 rounded-md text-white font-bold hover:bg-orange-700 duration-200 ${morestyle}`}>{content}</button>
    );
}

Button.propTypes = {
    id: PropTypes.string,
    content: PropTypes.string,
    type: PropTypes.string,
    morestyle: PropTypes.string,
    onClick: PropTypes.func
}