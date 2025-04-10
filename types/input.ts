import { Control, FieldValues, RegisterOptions } from 'react-hook-form';

interface IInput {
  name: string;
  control: Control<FieldValues>;
  label?: string;
  placeholder?: string;
  mode?: 'flat' | 'outlined';
  rules?: RegisterOptions;
}

export type {IInput}