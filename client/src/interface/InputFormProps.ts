import { IUser } from './User';

export interface IInputFormProps {
  label: string;
  typeInput: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<IUser>>;
  type: string;
  invalidFields: any[];
}
// FIXME: bug invalidFields
