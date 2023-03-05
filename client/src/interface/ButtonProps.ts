import { IconType } from 'react-icons/lib';

export interface IButtonProps {
  text: string;
  textColor: string;
  bgColor: string;
  IcAfter?: IconType;
  onClick?: () => void;
  size?: string;
  fullWidth?: boolean;
}
