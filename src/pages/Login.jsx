import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import Background from "../component/Background";
import Button from "../component/Button";
import Card from "../component/Card";
import Title from "../component/Title";
import Footer from "../component/Footer";
import IsekaiResto from "../component/IsekaiResto";
import { GiFishCooked } from "react-icons/gi";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const role = useSelector((state) => state.auth.role)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin({ username, password }));
    };

    useEffect(() => {
        if (isAuthenticated) {
          if(role === 'waiter'){
            navigate('/menu');
          } else if (role === 'cashier'){
            navigate('/payment')
          } else if (role === 'admin'){
            navigate('/admin');
          }
        }
      }, [isAuthenticated, navigate]);

    return (
    <Background>
        <Title content="Welcome!"/>
        <p className="text-white text-sm text-center m-auto w-2/3 mb-10"><span className="text-3xl font-bold">“</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className="text-3xl font-bold">”</span></p>
        <div className="m-auto w-1/3 h-full">
            <Card p="p-10">
                <div className="text-center">
                    <GiFishCooked className="text-center text-orange-500 inline-block text-4xl"/> <IsekaiResto/>
                </div>
                <form onSubmit={onSubmit} className="mt-10">
                <input 
                    required
                    type="text" 
                    id="username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    autoComplete='off'
                    className="block w-full p-2 mt-3 mb-3 rounded-md border border-black"
                />
                <input 
                    required
                    type="password" 
                    id="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    autoComplete='off'
                    className="block w-full p-2 mt-3 mb-3 rounded-md border border-black"
                />
                    <Button content="Login" type={'submit'} morestyle="mt-5 w-full"/>
                </form>
            </Card>
            <Footer/>
        </div>
    </Background>
    );
}