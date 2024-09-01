import PropTypes from 'prop-types';

export default function Input({
    name= 'form', 
    placeholder= '',
    type= 'text',
    value='',
    onChange= '', 
    autocomplete= 'off'}){
    return(
        <input value={value} onChange={onChange} type={type}name={name} id={name} autoComplete={autocomplete} placeholder={placeholder} className="block w-full p-2 mt-3 mb-3 rounded-md border border-black"/>
    )
}

Input.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    autocomplete: PropTypes.string,
}
