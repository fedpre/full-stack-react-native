
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native-gesture-handler';
import { useApolloClient, useQuery } from '@apollo/client';
import { useState } from 'react';
import { CHECK_AUTHENTICATED_USER } from '../graphql/queries';
import AppBarTabSignOut from './AppBarTabSignOut';
import useAuthStorage from "../hooks/useAuthStorage";


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    height: 120,
    flexDirection: 'row',
  },
  subheading: {
    color: theme.colors.white,
    marginLeft: 20,
    marginTop: 30,
  }
});

const AppBar = () => {
  const authStorage = useAuthStorage();
  let signedIn = false;
  const { data, error } = useQuery(CHECK_AUTHENTICATED_USER, {
    fetchPolicy: 'cache-and-network',
  });
  const apolloClient = useApolloClient();

  if(data)
  if (data.me != null) {
    signedIn = true;
  }

  const signOut = async () => {
    await authStorage.removeAccessToken();
    console.log('User Logged Out');
    signedIn = false;
    apolloClient.resetStore();
  }
  
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
      {
        signedIn
        ? 
        <>
          <AppBarTab 
            name="Repositories"
            navigateTo='RepositoryList'
          />
          <AppBarTab
            name="Review Form"
            navigateTo='ReviewForm'
          />
          <AppBarTabSignOut 
            name="Sign Out"
            action={signOut}
          />
        </>
        : <AppBarTab 
          name="Sign In"
          navigateTo='SignIn'
          />
      } 
      </ScrollView>
    </View>
  )
};

export default AppBar;