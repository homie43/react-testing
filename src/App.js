import React from 'react';
import Users from './users/Users';

function App() {
    const [data, setData] = React.useState(null);
    const [toggle, setToggle] = React.useState(false);
    const [value, setValue] = React.useState('');

    const onClick = () => setToggle((prev) => !prev);

    React.useEffect(() => {
        setTimeout(() => {
            setData({});
        }, 100);
    }, []);

    return (
        <div className='App'>
            <h1 data-testid='value-elem'>{value}</h1>
            {toggle === true && <div>ВКЛ</div>}
            {data && <div style={{ color: 'red' }}>data</div>}
            <div>
                <h1>Hello world</h1>
                <button onClick={onClick}>Click Me</button>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='input value'
                    type='text'
                />
            </div>

            <Users />
        </div>
    );
}

export default App;
