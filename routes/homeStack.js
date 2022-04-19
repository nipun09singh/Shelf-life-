import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Start from '../screens/start';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Plant from '../screens/plant';
import ForgotPassword from '../screens/ForgotPassword';
const Stack = createStackNavigator();
export default function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName="Start"
            options={{ headerShown: false }}
        >
            <Stack.Screen
                name="Start"
                component={Start}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Plant"
                component={Plant}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
