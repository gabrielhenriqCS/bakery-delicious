
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../home/page';


const Navigation = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/" />} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </div>
     );
}
 
export default Navigation;