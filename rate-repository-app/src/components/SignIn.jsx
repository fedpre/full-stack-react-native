import Text from "./Text";
import { Formik, useField } from "formik";
import { View, StyleSheet, Pressable } from "react-native";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigation } from "@react-navigation/native";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

export const SignInContainer = ({ HandleOnSubmit }) => {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username is too short")
      .required("Username is required"),
    password: yup
      .string()
      .min(3, "Password is too short")
      .required("Password is required"),
  });

  const styles = StyleSheet.create({
    btn: {
      backgroundColor: "#2245C4",
      padding: 15,
      margin: 15,
      borderRadius: 5,
    },
    btnText: {
      color: "#fff",
      textAlign: "center",
      fontSize: 18,
    },
  });

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={HandleOnSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => (
          <View>
            <FormikTextInput 
              name="username" 
              placeholder="Username" 
              autocomplete="off"
            />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry={true}
            />
            <Pressable onPress={handleSubmit} style={styles.btn}>
              <Text style={styles.btnText}>Sign In</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

const SignIn = () => {
  const navigation = useNavigation();
  const [signIn] = useSignIn();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      await authStorage.setAccessToken(data.authenticate.accessToken);
      const token = await authStorage.getAccessToken();
      console.log('Storage Token: ' + token);
      apolloClient.resetStore();
      navigation.navigate('RepositoryList')
    } catch (e) {
      console.log('error:' + e)
    }
  };

  return <SignInContainer HandleOnSubmit={onSubmit} />
};

export default SignIn;
