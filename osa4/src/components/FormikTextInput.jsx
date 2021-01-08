import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  flexItemInput: {
    marginTop: 10,
    flexGrow: 1,
    flexShrink:0,
    paddingLeft: 10,
      marginBottom: 10,
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
  },
    flexErrorInput: {
    marginTop: 10,
    flexGrow: 1,
    flexShrink:0,
    paddingLeft: 10,
      marginBottom: 10,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#d73a4a',
    height: 50,
  },

});

export const FormikPassWordInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
      <>{showError ? <View style={styles.flexErrorInput}> 
      <TextInput
        secureTextEntry={true}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        
      />
        </View> : 

      <View style={styles.flexItemInput}>
        <TextInput
        secureTextEntry={true}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        
      />
        </View>}
      {showError && <Text color="red" >{meta.error}</Text>}
    </>
  );
};


export const FormikInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>{showError ? <View style={styles.flexErrorInput}> 
      
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
         value={field.value}
        error={showError}
        {...props}
      />
      </View> : 

      <View style={styles.flexItemInput}>
         <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
         value={field.value}
        error={showError}
        {...props}
      />
      </View>}
      {showError && <Text color="red"> {meta.error}</Text>}
    </>
  );
};

export const FormikInputLongText = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>{showError ? <View style={styles.flexErrorInput}> 
      
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
         value={field.value}
        error={showError}
        {...props}
      />
      </View> : 

      <View style={styles.flexItemInput}>
         <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
         value={field.value}
        error={showError}
        multiline={true}
        textAlignVertical="top"
        {...props}
      />
      </View>}
      {showError && <Text color="red"> {meta.error}</Text>}
    </>
  );
};
