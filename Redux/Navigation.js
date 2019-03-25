import { createStackNavigator, createAppContainer } from "react-navigation";

import RootPage from "../Page/RootPage";
import LocalPage from "../Page/LocalPage";

let RootStack = createStackNavigator({
    RootPage,
    LocalPage,
});

export default createAppContainer(RootStack);