import React from 'react';
import { Button, View, StyleSheet} from 'react-native';
import Text from './Text';
import {FormikUserNameInput, FormikPassWordInput} from './FormikTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  userName: '',
  passWord:  '',
};

const styles = StyleSheet.create({
   flexItemA: {
    flexDirection: "column",
    marginLeft: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 5,
   }
});

const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .min(4, 'Username must be longer than four letters')
    .required('Username is required'),
  passWord: yup
    .string()
    .min(4, 'Password must be longer than four letters')
    .required('Password is required'),
});

const LoginForm = ({onSubmit}) => {
  return(
 <View style={styles.flexItem}>
  <View style={styles.flexItemInput}>
      <FormikUserNameInput name="userName" placeholder="Username" />
        </View>
          <View style={styles.flexItemInput}>
      <FormikPassWordInput  name="passWord" placeholder="Password" />
          </View>
      <Button title="Sign in" onPress={onSubmit} >
        <Text fontWeight="bold"fontSize="subheading" color="white">Sign in</Text>
      </Button >
      </View>
  )}

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
return (
    
     <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
      </Formik>
    
  );
};
export default SignIn;