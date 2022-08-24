import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 15,
    color: '#d73a4a',
  },
});

const FormikTextInput = ({ name, ...props}) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput 
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        multiline={props.multiline || false}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput