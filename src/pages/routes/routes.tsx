
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../home/page';
import Menu from '../menu/page';
import Layout from '../../components/Layout';


const Navigation = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<Layout children={undefined} />}>
                    <Route index element={<Home />} />
                    <Route path='menu' element={<Menu />} />
                    <Route path='orders' element={<Navigate to="/orders" />} />
                </Route>
            </Routes>
        </div>
     );
}
 
export default Navigation;