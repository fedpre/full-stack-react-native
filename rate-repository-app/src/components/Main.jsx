import theme from "../theme";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
    </View>
  );
};

export default Main;