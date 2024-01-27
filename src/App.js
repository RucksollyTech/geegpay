import Home from './Home';
import SideBar from './SideBar';
import RightBar from './RightBar';
import NavBar from './NavBar';
import Aos from 'aos'
import { useEffect } from 'react';

function App() {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div>
            <NavBar />
            <SideBar />
            <Home />
            <RightBar />
        </div>
    );
}

export default App;
