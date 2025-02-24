import { HelmetComponent } from "../../components/common/index";
import { MainContainer } from "../../styles/Global.styles";
import {
  Form,
  FormTitle,
  FormWrapper,
  HidePassword,
  Input,
  Link,
  P,
  Section,
  ShowPassword,
  SubmitBtn,
} from "./LoginSignup.style";
import Loading from "../../components/feedback/Loading/Loading";
import useLogin from "../../hooks/useLogin";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const FormGroup = styled.div`
  &:nth-of-type(2) {
    position: relative;
  }
`;
const Login = () => {
  const {
    loading,
    signIn,
    email,
    setEmail,
    showPassword,
    password,
    setPassword,
    setShowPassword,
    currentUser,
  } = useLogin();
  if (currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <HelmetComponent title="Login">
      <Section>
        <MainContainer>
          <Loading loading={loading}>
            <FormWrapper>
              <FormTitle>Login</FormTitle>
              <Form onSubmit={signIn}>
                <FormGroup>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {showPassword ? (
                    <ShowPassword onClick={() => setShowPassword(false)} />
                  ) : (
                    <HidePassword onClick={() => setShowPassword(true)} />
                  )}
                </FormGroup>
                <SubmitBtn type="submit">Login</SubmitBtn>
                <P>
                  Don&apos;t have an account?{" "}
                  <Link to="/register">Create an account</Link>
                </P>
              </Form>
            </FormWrapper>
          </Loading>
        </MainContainer>
      </Section>
    </HelmetComponent>
  );
};

export default Login;
