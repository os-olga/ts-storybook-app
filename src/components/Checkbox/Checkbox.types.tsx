export type CheckboxProps = {
  id: string;
  name: string;
  value?: string;
  checked?: boolean;
  isDisabled?: boolean;
  onClick?: (id?: string) => void;
  className?: string;
  style?: React.CSSProperties;
};