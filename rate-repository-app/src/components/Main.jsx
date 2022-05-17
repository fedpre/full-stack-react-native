import { StyleSheet } from "react-native";
import theme from "../theme";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";

const Main = () => {
  return (
    <>
      <AppBar/>
      <RepositoryList/>
    </>
  );
};

export default Main;