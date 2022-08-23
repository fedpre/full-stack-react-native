import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import { useEffect, useState } from 'react';
import useRepositories from '../hooks/useRepositories';

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

export const RepositoryListContainer = ({ navigation, repositories }) => {
  const repositoryNodes = repositories
    ? repositories.map(edge => edge.node)
    : [];

  return (
    <FlatList
      style={styles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
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
  const { repositories } = useRepositories();

  return <RepositoryListContainer navigation={navigation} repositories={repositories} />;
};

export default RepositoryList;