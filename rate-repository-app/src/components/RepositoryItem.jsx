import { Text } from 'react-native'

const RepositoryItem = (props) => {
  return (
    <>
      <Text>Fullname: {props.fullName}</Text>
      <Text>Description: {props.description}</Text>
      <Text>Language: {props.language}</Text>
      <Text>Forks: {props.forksCount}</Text>
      <Text>Star gazers: {props.stargazersCount}</Text>
      <Text>Rating: {props.ratingAverage}</Text>
      <Text>Reviews: {props.reviewCount}</Text>
    </>
  )
}

export default RepositoryItem