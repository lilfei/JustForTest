import { combineReducers } from "redux";
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import Navigation from './Navigation';

let initCount = {
    count: 0
}

function countReducer(countState = initCount, action) {
    if (action.type === 'countAction') {
        return {
            ...countState,
            count: aciton.count
        }
    } else {
        return {
            ...countState
        }
    }
}

const navReducer = createNavigationReducer(Navigation);

export default combineReducers({
    navReducer,
    countReducer,
});