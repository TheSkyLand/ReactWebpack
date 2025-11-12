import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/index.scss';


import { Provider } from 'mobx-react';
import { store } from './store/store'; // или другой файл

<Provider store={store}>
    <App />
</Provider>


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);