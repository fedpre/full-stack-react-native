import Text from "./Text";
import { Formik, useField } from "formik";
import { View, StyleSheet, Pressable } from "react-native";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigation } from "@react-navigation/native";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient, useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import useSignUp from "../hooks/useSignUp";

export const SignUpContainer = ({ HandleOnSubmit }) => {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username is too short")
      .required("Username is required"),
    password: yup
      .string()
      .min(3, "Password is too short")
      .required("Password is required"),
    passwordConfirmation: yup
      .string()
      .min(3, "Password confirmation is too short")
      .oneOf([yup.ref('password'), null], "Passwords don't match")
      .required("Password confirmation is required"),
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
    passwordConfirmation: "",
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
            <FormikTextInput
              name="passwordConfirmation"
              placeholder="Password confirmation"
              secureTextEntry={true}
            />
            <Pressable onPress={handleSubmit} style={styles.btn}>
              <Text style={styles.btnText}>Sign Up</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

const SignUp = () => {
  const navigation = useNavigation();
  const [signIn] = useSignIn();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [signUp] = useSignUp();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      let result = await signUp({ username, password })
      console.log(result.data.createUser);

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

  return <SignUpContainer HandleOnSubmit={onSubmit} />
};

export default SignUp;
