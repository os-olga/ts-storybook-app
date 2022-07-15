export type InputProps = {
    type: string,
    value: string;
    onClick?: () => void;
    // onChange?: (
    //     event: React.ChangeEvent<HTMLInputElement>
    // ) => void | undefined;
    placeholder: string,
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
