import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import BuyTicket from '../screens/buyticket';
import Login from '../screens/login';
import Main from '../screens/main';


interface MainNavigationProps {

}

export type StackParams = {
    login: undefined
    main: undefined
    buyticket: undefined
    
}


const Stack = createStackNavigator<StackParams>();

const MainNavigation: React.FC<MainNavigationProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="buyticket" component={BuyTicket} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainNavigation;