import { Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { useNavigation } from "@react-navigation/native";
import { createSignalIfSupported } from "@apollo/client";

const styles = StyleSheet.create({
  subheading: {
    color: theme.colors.white,
    marginLeft: 20,
    marginTop: 30,
  },
});


const AppBarTab = ({ name, action }) => {
  const navigation = useNavigation()

  return (
    <Pressable onPress={() => { 
      action() 
      navigation.navigate('SignIn')
      }}>
      <Text fontSize="subheading" style={styles.subheading} fontWeight="bold">
        {name}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
