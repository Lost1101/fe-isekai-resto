import PropTypes from 'prop-types';

export default function IsekaiResto({ color='text-orange-500' }){
   return(
    <div className="text-lg inline-block font-bold pt-2">
        <span className="text-black">Isekai<span className={color}>Resto</span></span>
    </div>
   )
}

IsekaiResto.propTypes = {
    color: PropTypes.string
}