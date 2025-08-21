import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";

// Validação com Yup
const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().min(6, "No mínimo 6 caracteres").required("Campo obrigatório"),
}).required();

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  const onSubmit = (data: IFormLogin) => {
    console.log("Dados enviados:", data);
    // Aqui você pode chamar uma API, redirecionar, etc.
  };

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              placeholder="Email"
              control={control}
              errorMessage={errors?.email?.message}
            />
            <Spacing />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              control={control}
              errorMessage={errors?.password?.message}
            />
            <Button
              title="Entrar"
              type="submit"
              disabled={!isValid || isSubmitting}
              isLoading={isSubmitting}
            />

          </form>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
