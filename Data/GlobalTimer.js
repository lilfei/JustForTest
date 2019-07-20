import { Store } from '../Redux/Store';
import { countAction } from '../Redux/Action';

function GlobalTimer() {
    setInterval(() => {
        console.log("count 000: ", Store.getState().countReducer.count);
        let count = Store.getState().countReducer.count;
        console.log("count 111: ", count);
        count++;
        console.log("count 222: ", count);
        Store.dispatch(countAction(count));
    }, 2000)
};

export default GlobalTimer;