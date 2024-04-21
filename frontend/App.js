
import Home from './screens/Home';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Profile from './screens/Profile';
import Bookmark from './screens/Bookmark';
import Info from './screens/Info';

export default function App() {

  const Stack=createNativeStackNavigator()
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName='Login'>
  <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
  <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
  <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
  <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
  <Stack.Screen name="Bookmark" component={Bookmark} options={{ headerShown: false }} />
  <Stack.Screen name="Info" component={Info} options={{ headerShown: false }} />

</Stack.Navigator>

</NavigationContainer>
  );
}


