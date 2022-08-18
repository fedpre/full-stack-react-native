import Text from "./Text";
import { Formik, useField } from "formik";
import { View, StyleSheet, Pressable } from "react-native";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";


const SignIn = () => {
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

  const [signIn, result] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      console.log(result.data.authenticate.accessToken);
    } catch (e) {
      console.log('error:' + e)
    }
  };

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
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

export default SignIn;
