import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    padding: 15,
    margin: 15,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style]

  return <NativeTextInput style={styles.input} {...props} />
};

export default TextInput;