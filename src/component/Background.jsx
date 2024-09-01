import PropTypes from 'prop-types';

export default function Background({ children= '' }){
    return(
        <div className='bg-orange-500 min-h-screen'>
            {children}
        </div>
    )
}

Background.propTypes = {
    children: PropTypes.node
}
