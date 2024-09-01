import PropTypes from 'prop-types';

export default function NavAdmin ({activeButton, setActiveButton}) {

    return(
        <div className="w-fit m-auto flex justify-center border border-white rounded-xl">
            <button className={`pl-3 pr-3 p-3 rounded-l-xl duration-200 hover:bg-orange-700 text-white ${activeButton === 'user' ? 'bg-orange-700 text-white' : ''}`} onClick={() => setActiveButton('user')}>User</button>
            <button className={`pl-3 pr-3 p-3 rounded-r-xl  duration-200 hover:bg-orange-700 text-white ${activeButton === 'menu' ? 'bg-orange-700 text-white' : ''}`} onClick={() => setActiveButton('menu')}>Menu</button>
        </div>
    )
}

NavAdmin.propTypes = {
    activeButton: PropTypes.any,
    setActiveButton: PropTypes.func
}