import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, isLoading, ...rest }: IButtonProps) => {
  return (
    <ButtonContainer {...rest}>
      {isLoading ? "Carregando..." : title}
    </ButtonContainer>
  );
};

export default Button;

