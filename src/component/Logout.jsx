import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from "../redux/actions/authActions";
import { useNavigate } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";

export default function Logout (){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const logout = async () => {
        try {
            dispatch(handleLogout());
        } catch (error) {
            console.error('Logout failed', error);
        } finally {
            setTimeout(() => {
                navigate('/login');
            }, 300);
        }
    };

    return(
        <button className={`text-white text-3xl absolute top-5 left-5 ${isAuthenticated ? 'block' : ''}}`} onClick={() => logout()}><BiLogOut /></button>
    )
}