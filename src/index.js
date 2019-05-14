import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

const airplaneReducer = (state = [], action) =>{
    console.log(`I'm working!`)
}

const storeInstance = createStore(
    combineReducers({
        airplaneReducer,
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider> , document.getElementById('root'));
