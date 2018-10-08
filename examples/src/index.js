import React from 'react';
import ReactDOM from 'react-dom';
import SimpleExample from './simple-example';

import './styles.css';

const App = () => (
    <div className='leaflet-container'>
        <SimpleExample />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'))