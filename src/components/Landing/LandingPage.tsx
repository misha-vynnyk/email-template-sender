import { LandingHeader } from "./LandingHeader/LandingHeader";
import {
  StyledLandingPage,
  StyledMainDescription,
  StyledMainImg,
  StyledMainTitle,
} from "./StyledLanding";
import mainImage from "../../assets/main-img.jpeg";

export const LandingPage = () => {
  return (
    <StyledLandingPage>
      <LandingHeader />
      <StyledMainImg src={mainImage} />
      <StyledMainDescription>
        <b>Design jaw-dropping HTML emails in minutes — no coding needed.</b> Experience real-time
        editing with a live preview, and unlock powerful, intuitive tools for pixel-perfect styling.
        Validate with ease, save your masterpieces, and hit send like a pro — straight to your
        audience.
      </StyledMainDescription>
      <StyledMainTitle>Key Features</StyledMainTitle>
    </StyledLandingPage>
  );
};
