import PropTypes from 'prop-types';

export default function NumberComma(x){
    if (x === null || x === undefined || isNaN(x)) {
        return '';
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

NumberComma.propTypes={
    x: PropTypes.string
}