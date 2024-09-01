import PropTypes from 'prop-types';

export default function Title({ content }){
    return(
        <h1 className="text-white text-5xl text-center p-10 font-bold">{content}</h1>
    )
}

Title.propTypes = {
    content: PropTypes.string.isRequired
}