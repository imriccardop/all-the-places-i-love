import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import App from './Pages/App';
import List from './Pages/List';

const RouteMenu = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<App />} />
          <Route path="/list" element={<List />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </>
 );
};

export default RouteMenu;