import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Background from "../component/Background";
import Title from "../component/Title";
import Logout from "../component/Logout";
import NavAdmin from "../component/NavAdmin";
import Card from "../component/Card";
import PropTypes from 'prop-types';
import { fetchUsers } from "../redux/actions/adminActions";
import CardUser from "../component/CardUser";
import AddUserModal from "../component/addUserModal";
import CardMenuAdmin from "../component/CardMenuAdmin";
import AddMenuModal from "../component/AddMenuModal";
import { addUser, delUser, addMenu, delMenu, editMenu } from "../redux/actions/adminActions";
import { fetchMenus } from '../redux/actions/menuActions';

export default function Admin({auth}){
    const dispatch = useDispatch();
    const [activeButton, setActiveButton] = useState('user');
    const [showModal, setShowModal] = useState(false);
    const [showModalMenu, setShowModalMenu] = useState(false);
    const [editData, setEditData] = useState(null);
    const user = useSelector((state) => state.users.users);
    const menus = useSelector((state) => state.menus.menus);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [user, dispatch]);

    useEffect(() => {
        dispatch(fetchMenus());
    }, [dispatch])

    const showUser = () => {
        setShowModal(true);
    }

    const hideUser = () => {
        setShowModal(false);
    }

    const showMenu = (data = null) => {
        setEditData(data);
        setShowModalMenu(true);
    }    

    const hideMenu = () => {
        setShowModalMenu(false);
    }

    const addingUser = (username, name, password, role) => {
        dispatch(addUser(username, name, password, role));
        hideUser();
    }

    const deleteUser = (id) => {
        dispatch(delUser(id));
    } 

    const addingMenu = (name, price, time, stock, category) => {
        if (editData) {
            dispatch(editMenu(editData.id, name, price, time, stock, category));
        } else {
            dispatch(addMenu(name, price, time, stock, category));
        }
        hideMenu();
    }

    const deleteMenu = (id) => {
        dispatch(delMenu(id));
    }

    return(
        <Background>
            {auth? <Logout/> : ''}
            <Title content="Admin"/>
            <div className="p-5">
                <NavAdmin activeButton={activeButton} setActiveButton={setActiveButton}/>
            </div>
            <Card width="w-4/5 m-auto" p="p-5">
                {activeButton === 'user' ? (
                    <CardUser data={user} func1={showUser} func2={deleteUser}/>
                ): (<CardMenuAdmin data={menus} func1={showMenu} func2={deleteMenu}/>)}
            </Card>
            {showModal ? (<AddUserModal display={hideUser} func={addingUser}/>) : ''}
            {showModalMenu ? (<AddMenuModal display={hideMenu} func={addingMenu} editData={editData}/>) : ''}
        </Background>
    )
}

Admin.propTypes = {
    auth: PropTypes.bool
}