
import { Route, Routes } from 'react-router-dom';
import Home from '../home/page';
import Menu from '../menu/page';
import Orders from '../orders/page';
import Layout from '../../components/Layout';


export default function Navigation() {
    return ( 
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='menu' element={<Menu />} />
                    <Route path='orders' element={<Orders />} />
                </Route>
            </Routes>
     );
}
 
