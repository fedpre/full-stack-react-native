import { Image, Pressable, StyleSheet, View } from 'react-native'
import theme from '../theme';
import DescriptionBox from './DescriptionBox';
import Language from './Language';
import Text from "./Text";

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
})

const RepositoryItem = ( { navigation, ...props } ) => {

  return (
    <Pressable onPress={() => navigation.navigate('RepositoryItemDetails', {
      props: props
    })}>
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
      </View>
    </Pressable>
  );
};

export default RepositoryItem;