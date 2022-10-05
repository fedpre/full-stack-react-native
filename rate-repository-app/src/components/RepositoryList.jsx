import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import { useEffect, useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: "blue"
  }
});

export const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ navigation, repositories, setOrder, selectedOrder }) => {
  const repositoryNodes = repositories
    ? repositories.map(edge => edge.node)
    : [];

  return (
    <FlatList
      style={styles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <Picker
          selectedValue={selectedOrder}
          onValueChange={(itemValue, itemIndex) =>
            setOrder(itemValue)
            }>
            <Picker.Item label="Latest repository" value="ls" />
            <Picker.Item label="Highest rated repositories" value="hrr" />
            <Picker.Item label="Lowest rated repositories" value="lrr" />
        </Picker>
      }
      renderItem={({ item, index, separators}) => (
        <RepositoryItem
          key={item.id}
          fullName={item.fullName}
          description={item.description}
          language={item.language}
          forksCount={item.forksCount}
          stargazersCount={item.stargazersCount}
          ratingAverage={item.ratingAverage}
          reviewCount={item.reviewCount}
          avatarUrl={item.ownerAvatarUrl}
          url={item.url}
          reviews={item.reviews}
          navigation={navigation}
        />
      )}
    />
  );
};

const RepositoryList = ({ navigation }) => {
  const [selectedOrder, setSelectedOrder] = useState();

  const [orderBy, setOrderBy] = useState('CREATED_AT')
  const [orderDirection, setOrderDirection] = useState('DESC')

  const changeOrder = () => {
      if (selectedOrder === "ls") {
          setOrderBy('CREATED_AT')
          setOrderDirection('DESC')
      } else if (selectedOrder === "hrr") {
          setOrderBy('RATING_AVERAGE')
          setOrderDirection('DESC')
      } else {
          setOrderBy('RATING_AVERAGE')
          setOrderDirection('ASC')
      }
  }

  useEffect(() => {
      changeOrder()
  }, [selectedOrder])

  const { repositories } = useRepositories(orderBy, orderDirection);

  return <RepositoryListContainer navigation={navigation} repositories={repositories} setOrder={setSelectedOrder} selectedOrder={selectedOrder}/>;
};

export default RepositoryList;