import Button from './ButtonComponent';

const Button = ({ label, bsButtonType, onClickFunction }) => {

    return <Button variant={bsButtonType} onClick={onClickFunction}>{label}</Button>;
};

export default ButtonComponent;


