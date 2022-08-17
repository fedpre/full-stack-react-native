import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AppBar from "./src/components/AppBar";
import { ApolloProvider } from "@apollo/client";

import Main from "./src/components/Main";
import RepositoryList from "./src/components/RepositoryList";
import SignIn from "./src/components/SignIn";
import createApolloClient from "./src/utils/apolloClient";

import Constants from "expo-constants";

const apolloClient = createApolloClient()
const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
    <ApolloProvider client={apolloClient}>

      <Stack.Navigator
        initialRouteName="SignIn">
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
    </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
