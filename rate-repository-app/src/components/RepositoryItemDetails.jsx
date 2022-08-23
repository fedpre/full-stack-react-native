import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import theme from '../theme';
import DescriptionBox from './DescriptionBox';
import Language from './Language';
import Text from "./Text";
import * as Linking from 'expo-linking';
import { ItemSeparator } from './RepositoryList';

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
  separator: {
    height: 10,
  },
    container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
    bodyContainer: {
    padding: 20,
    backgroundColor: theme.colors.white,
    shadowColor: "black",
  },
  bodyContainerDetail: {
    padding: 20,
    backgroundColor: theme.colors.white,
    shadowColor: "black",
    flexDirection: "row"
  },
})

const ReviewItem = ({ review }) => {
  console.log(review.node.createdAt);
  const newDate = new Date(review.node.createdAt)
  const formattedDate = `${newDate.getDay()}.${newDate.getMonth()}.${newDate.getFullYear()}`
  console.log(formattedDate);
  return (
    <View style={styles.bodyContainerDetail}>
      <View>
        <Text style={{ borderRadius: 23, borderWidth: 2, padding: 10, borderColor: theme.colors.primary, color: theme.colors.primary, fontWeight: 'bold', fontSize: 18}}>{review.node.rating}</Text>
      </View>
      <View style={{ paddingLeft: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 16, paddingBottom: 3 }}>{review.node.user.username}</Text>
        <Text style={{ paddingBottom: 10 }}>{formattedDate}</Text>
        <Text>{review.node.text}</Text>
      </View>
    </View>
  )
};

const RepositoryItemDetails = ({ navigation, route }) => {

  const { props } = route.params;

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
        <FlatList 
          style={styles.container}
          data={props.reviews.edges}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => <ReviewItem review={item} />}
        />
      </View>
  );
};

export default RepositoryItemDetails;