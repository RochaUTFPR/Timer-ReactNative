import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Home } from '../screens/Home';
const { Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
              name="Login"
              component={Login}
            />
            <Screen
              name="Register"
              component={Register}
            />
            <Screen
              name="Home"
              component={Home}
            />
        </Navigator>
    )
}