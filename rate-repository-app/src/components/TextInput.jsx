import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    padding: 15,
    margin: 15,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
  },
  inputError: {
    padding: 15,
    margin: 15,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#d73a4a',
    borderRadius: 5,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style]

  return <NativeTextInput style={error ? styles.inputError : styles.input} {...props} />
};

export default TextInput;