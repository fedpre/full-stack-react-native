import { Image, Pressable, StyleSheet, View } from 'react-native'
import theme from '../theme';
import DescriptionBox from './DescriptionBox';
import Language from './Language';
import Text from "./Text";
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  pb1: {
    paddingBottom: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  bodyContainer: {
    padding: 20,
    backgroundColor: theme.colors.white,
    shadowColor: "black",
  },
  imgNameContainer: {
    flexDirection: 'row',
    width: 300,
  },
  descContainer: {
    paddingLeft: 25,
    paddingTop: 5,
    width: 250,
  },
  description: {
    color: theme.colors.textSecondary,
    fontSize: 16,
    paddingBottom: 10,
  },
  descBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
})

const RepositoryItemDetails = ({ navigation, route }) => {

  const { props } = route.params;
  console.log(props);

  return (
      <View testID="repositoryItem" style={styles.bodyContainer}>
        <View style={styles.imgNameContainer}>
          <Image 
            source={{ uri: props.avatarUrl }}
            style={styles.avatar}
          />
          <View style={styles.descContainer}>
            <Text fontWeight='bold' fontSize="subheading" style={styles.pb1}>{props.fullName}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Language label={props.language}/>
          </View>
        </View>
        <View style={styles.descBoxContainer}>
          <DescriptionBox label="Stars" content={props.stargazersCount} />
          <DescriptionBox label="Forks" content={props.forksCount}/>
          <DescriptionBox label="Reviews" content={props.reviewCount}/>
          <DescriptionBox label="Rating" content={props.ratingAverage}/>
        </View>
        <Pressable onPress={() => Linking.openURL(props.url)} style={styles.btn}>
          <Text style={styles.btnText}>Open in GitHub</Text>
        </Pressable>
      </View>
  );
};

export default RepositoryItemDetails;