import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AppBar from "./src/components/AppBar";
import { ApolloProvider } from "@apollo/client";

import Main from "./src/components/Main";
import RepositoryList from "./src/components/RepositoryList";
import SignIn from "./src/components/SignIn";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/authContextStorage";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage)

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
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
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
