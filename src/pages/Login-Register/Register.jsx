import { Navigate } from "react-router-dom";
import { HelmetComponent } from "../../components/common/index";
import Loading from "../../components/feedback/Loading/Loading";
import useRegister from "../../hooks/useRegister";
import { MainContainer } from "../../styles/Global.styles";
import {
  Form,
  FormGroup,
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

const Register = () => {
  const {
    loading,
    signUp,
    username,
    setUsername,
    email,
    setEmail,
    showPassword,
    password,
    setPassword,
    setShowPassword,
    setFile,
    currentUser,
  } = useRegister();
  if (currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <HelmetComponent title="Signup">
      <Section>
        <MainContainer>
          <Loading loading={loading}>
            <FormWrapper>
              <FormTitle>Signup</FormTitle>
              <Form onSubmit={signUp}>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </FormGroup>
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
                <div className="form-group">
                  <Input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <SubmitBtn type="submit">Create an account</SubmitBtn>
                <P>
                  Already have an account? <Link to="/login">Login</Link>
                </P>
              </Form>
            </FormWrapper>
          </Loading>
        </MainContainer>
      </Section>
    </HelmetComponent>
  );
};

export default Register;
