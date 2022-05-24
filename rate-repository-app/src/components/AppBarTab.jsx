import { Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  subheading: {
    color: theme.colors.white,
    marginLeft: 20,
    marginTop: 30,
  },
});


const AppBarTab = ({ name, navigateTo }) => {
  const navigation = useNavigation()

  return (
    <Pressable onPress={() => { navigation.navigate(navigateTo)}}>
      <Text fontSize="subheading" style={styles.subheading} fontWeight="bold">
        {name}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
