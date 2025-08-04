import { Logo } from "../../Logo/Logo";
import { StyledLandingHeader, StyledLink, StyledName, Wrapper } from "./StyledLandingHeader";
import { useModal } from "../../../store/ModalContext/ModalContext";

export const LandingHeader = () => {
  const { openModal, isLogin } = useModal();
  return (
    <StyledLandingHeader>
      <Wrapper>
        <Logo />
        <StyledName>HtEmail Template Sender</StyledName>
      </Wrapper>
      <Wrapper>
        {isLogin ? (
          <StyledLink to='/editor'>
            <span>Start Send</span>
          </StyledLink>
        ) : (
          <StyledLink
            to='#'
            onClick={openModal}
            $size='small'
          >
            <span>Log In</span>
          </StyledLink>
        )}
        <StyledLink
          to='/editor'
          $size='small'
        >
          <span>Use local</span>
        </StyledLink>
      </Wrapper>
    </StyledLandingHeader>
  );
};
