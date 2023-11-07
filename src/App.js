import React from 'react';

function App() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        setTimeout(() => {
            setData({});
        }, 100);
    }, []);

    return (
        <div className='App'>
            {data && <div style={{ color: 'red' }}>data</div>}
            <div>
                <h1>Hello world</h1>
                <button>Click Me</button>
                <input placeholder='input value' type='text' />
            </div>
        </div>
    );
}

export default App;
