import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AppBar from "./src/components/AppBar";

import Main from "./src/components/Main";
import RepositoryList from "./src/components/RepositoryList";
import SignIn from "./src/components/SignIn";

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="RepositoryList">
      <Stack.Screen 
        name="Main"
        component={Main}
      />
      <Stack.Screen 
        name="RepositoryList"
        component={RepositoryList}
        options={{
          header: props => <AppBar {...props} />
        }}
      />
      <Stack.Screen 
        name="SignIn"
        component={SignIn}
        options={{
          header: props => <AppBar {...props} />
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
