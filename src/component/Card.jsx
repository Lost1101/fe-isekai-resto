import PropTypes from 'prop-types';

export default function Card ({ 
    children= '',
    width= 'w-full',
    bg= 'bg-white',
    p= 'p-5' }) {
    return(
    <div className= {`h-fit shadow-xl rounded-md ${width} ${bg} ${p}`}>
        {children}
    </div>
    )
}

Card.propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
    bg: PropTypes.string,
    p: PropTypes.string
}