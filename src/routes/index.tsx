import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import BuyTicket from '../screens/buyticket';
import Cad from '../screens/cad';
import Login from '../screens/login';
import Main from '../screens/main';
import Team from '../screens/team';

import Watch from '../screens/watch';


interface MainNavigationProps {

}

export type StackParams = {
    login: undefined
    main: undefined
    buyticket: undefined
    watch: undefined
    team: undefined
    cad: undefined
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
        <Stack.Screen name="watch" component={Watch} />
        <Stack.Screen name="team" component={Team} />
        <Stack.Screen name="cad" component={Cad} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainNavigation;