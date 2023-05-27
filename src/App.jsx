import { useState } from 'react';
import Button from './components/Button';
import PlaceContentCenter from './components/PlaceContentCenter';

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((prevState) => prevState + 1);
    }
    return (
        <PlaceContentCenter>
            <h1 className='text-5xl font-bold'>{count}</h1>
            <div className='mt-5 flex items-center gap-2'>
                <Button onClick={handleClick}>Change name</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}>
                    +3
                </Button>
            </div>
        </PlaceContentCenter>
    );
}

export default App;
