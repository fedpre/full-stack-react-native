import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import * as yup from "yup";
import { CREATE_REVIEW } from '../graphql/mutations';
import FormikTextInput from './FormikTextInput';


const styles = StyleSheet.create({
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
  });

const ReviewForm = () => {
  const navigation = useNavigation();
  const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Repository owner name is required'),
    name: yup
        .string()
        .required(),
    rating: yup
        .number()
        .required()
        .min(0, 'Too low')
        .max(100, 'Too high'),
    text: yup
        .string()
  })

  const initialValues = {
    username: '',
    name: '',
    rating: 0,
    text: ''
  };
  const [mutate, result] = useMutation(CREATE_REVIEW)

  const handleOnSubmit = async (values) => {
    console.log(values);

    await mutate({
        variables: {
            review: {
                repositoryName: values.name,
                ownerName: values.username,
                rating: parseInt(values.rating),
                text: values.text
            }
        }
    })

    console.log(result);
    navigation.navigate('RepositoryList')
  };

  return (
    <View>
        <Formik
            initialValues={initialValues}
            onSubmit={handleOnSubmit}
            validationSchema={validationSchema}
            >
        {({ handleSubmit }) => ( 
            <View>
                <FormikTextInput 
                    name='username'
                    placeholder='Repository owner name'
                    autocomplete='off'
                />
                <FormikTextInput 
                    name='name'
                    placeholder='Repository name'
                    autocomplete='off'
                />
                <FormikTextInput 
                    name='rating'
                    placeholder='Rating between 0 and 100'
                    autocomplete='off'
                />
                <FormikTextInput 
                    name='text'
                    placeholder='Review'
                    autocomplete='off'
                    multiline={true}
                />
                <Pressable onPress={handleSubmit} style={styles.btn}>
                    <Text style={styles.btnText}>Create a review</Text>
                </Pressable>
            </View>
        )}
        </Formik>
    </View>
  );
};

export default ReviewForm;