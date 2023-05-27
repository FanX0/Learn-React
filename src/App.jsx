import { useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Counter from './components/counter';

function App() {
    return (
        <PlaceContentCenter>
            <Counter initialValue={10} />
        </PlaceContentCenter>
    );
}

export default App;
