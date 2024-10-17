import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import AboutUs from './screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import Login from './screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './screens/Profile';
import Cart from './screens/Cart';
import Courses from './screens/Courses';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  Login: undefined;
  Home: {username: string, password: string};
  CourseList: {username: string, password: string};
  Courses: undefined;
  Cart: {cartItems: number};
};

function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14, paddingBottom: 5, fontWeight: 500},
        tabBarStyle: {height: 60},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={20}
              color={focused ? 'blue' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          headerShown: false,
          title: 'Courses',
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'book' : 'book-outline'}
              size={20}
              color={focused ? 'blue' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          title: 'Cart',
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'cart' : 'cart-outline'}
              size={20}
              color={focused ? 'blue' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'account-circle' : 'account-circle-outline'}
              size={22}
              color={focused ? 'blue' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'COURSERA', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Courses"
          component={Courses}
          options={{title: 'Courses'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
