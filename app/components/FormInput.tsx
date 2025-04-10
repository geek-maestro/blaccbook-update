import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import { Controller, Control, FieldValues, RegisterOptions } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';

interface FormInputProps extends TextInputProps {
  name: string;
  control: Control<FieldValues>;
  label: string;
  placeholder?: string;
  mode?: 'flat' | 'outlined';
  rules?: RegisterOptions;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  placeholder,
  mode = 'outlined',
  rules = {},
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View style={styles.container}>
          <TextInput
            mode={mode}
            label={label}
            placeholder={placeholder}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value ?? ''}
            outlineColor={error ? 'red' : undefined}
            {...props}
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});

export default FormInput;
