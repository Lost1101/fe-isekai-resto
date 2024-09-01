import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './component/ProtectedRoute';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Queue from './pages/Queue';
import Payment from './pages/Payment';
import OrderList from './pages/OrderList';
import Admin from './pages/Admin';
import Unauthorized from './pages/Unauthorized';

export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/menu"
          element={
            <ProtectedRoute auth={isAuthenticated} allowedRoles={['admin', 'waiter']}>
              <Menu auth={isAuthenticated}/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute auth={isAuthenticated} allowedRoles={['admin']}>
              <Admin auth={isAuthenticated}/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/queue"
          element={
              <Queue />
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute auth={isAuthenticated} allowedRoles={['admin', 'cashier']}>
              <Payment auth={isAuthenticated}/>
            </ProtectedRoute>
          }
        />

        <Route
          path='/list'
          element={
            <ProtectedRoute auth={isAuthenticated} allowedRoles={['admin', 'waiter']}>
              <OrderList auth={isAuthenticated}/>
            </ProtectedRoute>
          }
        />

        <Route path='/unauthorized' element={<Unauthorized />} />
      </Routes>
    </Router>
  );
}