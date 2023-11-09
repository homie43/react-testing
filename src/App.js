// import React from 'react';

// function App() {
//     const [data, setData] = React.useState(null);
//     const [toggle, setToggle] = React.useState(false);
//     const [value, setValue] = React.useState('');

//     const onClick = () => setToggle((prev) => !prev);

//     React.useEffect(() => {
//         setTimeout(() => {
//             setData({});
//         }, 100);
//     }, []);

//     return (
//         <div className='App'>
//             <h1 data-testid='value-elem'>{value}</h1>
//             {toggle === true && <div>ВКЛ</div>}
//             {data && <div style={{ color: 'red' }}>data</div>}
//             <div>
//                 <h1>Hello world</h1>
//                 <button onClick={onClick}>Click Me</button>
//                 <input
//                     onChange={(e) => setValue(e.target.value)}
//                     placeholder='input value'
//                     type='text'
//                 />
//             </div>
//         </div>
//     );
// }

// export default App;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
    return (
        <div>
            <Link to='/' data-testid='main-link'>
                main
            </Link>
            <Link to='/about' data-testid='about-link'>
                about
            </Link>
            <Routes>
                <Route path='/about' element={<AboutPage />} />
                <Route path='/' element={<MainPage />} />
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
        </div>
    );
};

export default App;
