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
import Navbar from './components/Navbar/Navbar';
import AppRouter from './routes/AppRouter';

const App = () => {
    return (
        <div>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
