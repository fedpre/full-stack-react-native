import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  content: {
    marginBottom: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  label: {
    alignSelf: 'center',
  }
})

const numberFormatter = (n) => {
  let num = Number(n)

  if (num >= 1000) {
    num = num / 100
    num = Math.ceil(num)
    let numStr = `${num/10}k`
    return numStr
  }
  return num
}

const DescriptionBox = ({ label, content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{numberFormatter(content)}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default DescriptionBox