import { Button, StyleSheet, View } from 'react-native'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
  }
})

const Language = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ label }</Text>
    </View>
  )
}

export default Language