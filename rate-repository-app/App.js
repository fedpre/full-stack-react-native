import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AppBar from "./src/components/AppBar";
import { ApolloProvider, useQuery } from "@apollo/client";

import Main from "./src/components/Main";
import RepositoryList from "./src/components/RepositoryList";
import SignIn from "./src/components/SignIn";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/authContextStorage";
import RepositoryItemDetails from "./src/components/RepositoryItemDetails";
import { CHECK_AUTHENTICATED_USER } from "./src/graphql/queries";
import { View } from "react-native";
import ReviewForm from "./src/components/ReviewForm";
import SignUp from "./src/components/SignUp";


const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage)

const Stack = createStackNavigator()


const App = () => {
  let signedIn = false;
  const { data, loading } = useQuery(CHECK_AUTHENTICATED_USER, {
    fetchPolicy: 'cache-and-network',
    client: apolloClient,
  });
  if (loading) {
    return <View></View>
  } else {
    if (data.me != null) {
      signedIn = true;
    }
  }
  
  return (
    <NavigationContainer>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Stack.Navigator
            initialRouteName={signedIn ? "RepositoryList" : "SignIn"}>
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
            <Stack.Screen 
              name="SignUp"
              component={SignUp}
              options={{
                header: props => <AppBar {...props} />
              }}
            />
            <Stack.Screen 
              name="RepositoryItemDetails"
              component={RepositoryItemDetails}
              options={{
                header: props => <AppBar {...props} />
              }}
            />
            <Stack.Screen 
              name="ReviewForm"
              component={ReviewForm}
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
