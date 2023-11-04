import { FaApple, FaGoogle } from "react-icons/fa6";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "@components/styled/Button.styled";

import XLogo from "@assets/x.svg";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Main = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 9rem;
  margin: auto;
  width: 66%;
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  width: 380px;
`;

const Content = styled.div`
  flex: 1;
`;

const Heading = styled.h1`
  font-size: 64px;
  line-height: 84px;
  margin-bottom: 51px;
`;

const SubHeading = styled.h2`
  font-size: 31px;
  line-height: 36px;
  margin-bottom: 30px;
`;

const HorizontalRule = styled.hr`
  border: 1px solid #2f3336;
  margin: 25px 0;
  width: 300px;
`;

const OrContainer = styled.div`
  text-align: center;
  margin: -2.2rem 0 20px;
  width: 300px;
`;

const SignUpGoogleButton = styled(Button)`
  align-items: center;
  display: flex;
  font-size: 15px;
  line-height: 20px;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 10px;
  width: 300px;
`;

const SignUpAppleButton = styled(Button)`
  align-items: center;
  display: flex;
  font-size: 15px;
  gap: 1rem;
  line-height: 20px;
  justify-content: center;
  width: 300px;
`;

const Or = styled.span`
  background-color: #000000;
  font-size: 15px;
  line-height: 20px;
  padding: 0.5rem;
`;

const CreateAccountButton = styled(Button)`
  display: block;
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 10px;
  width: 300px;
`;

const TermAndServicesInfo = styled.div`
  font-size: 11px;
  line-height: 12px;
  margin-bottom: 68px;
`;

const AlreadyHaveAnAccount = styled.div`
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 21px;
`;

const SignInButton = styled(Button)`
  color: #1d9bf0;
  display: block;
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 10px;
  width: 300px;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #71767b;
  font-size: 13px;
  line-height: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled(FooterLink)`
  &:hover {
    text-decoration: none;
  }
`;

function Home() {
  const navigate = useNavigate();

  const handleClickCreateAccount = () => navigate("sign-up");
  const handleClickSignIn = () => navigate("sign-in");

  return (
    <>
      <Container>
        <Main>
          <LogoContainer>
            <Logo src={XLogo} alt="x-logo" />
          </LogoContainer>
          <Content>
            <Heading>Happening now</Heading>
            <SubHeading>Join today</SubHeading>
            <SignUpGoogleButton $variant="secondary">
              <FaGoogle size={20} />
              Sign up with Google
            </SignUpGoogleButton>
            <SignUpAppleButton $variant="secondary">
              <FaApple size={20} />
              Sign up with Apple
            </SignUpAppleButton>
            <HorizontalRule />
            <OrContainer>
              <Or>or</Or>
            </OrContainer>
            <CreateAccountButton
              $variant="primary"
              onClick={handleClickCreateAccount}
            >
              Create account
            </CreateAccountButton>
            <TermAndServicesInfo>
              By signing up, you agree to the Terms of Service and <br />{" "}
              Privacy Policy, including Cookie Use.
            </TermAndServicesInfo>
            <AlreadyHaveAnAccount>
              Already have an account?
            </AlreadyHaveAnAccount>
            <SignInButton $variant="tertiary" onClick={handleClickSignIn}>
              Sign in
            </SignInButton>
          </Content>
        </Main>
        <FooterNav>
          <FooterLink
            href="https://about.twitter.com"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            About
          </FooterLink>
          <FooterLink
            href="https://help.twitter.com/using-x/download-the-x-app"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Download the X app
          </FooterLink>
          <FooterLink
            href="https://help.twitter.com"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Help Centre
          </FooterLink>
          <FooterLink
            href="https://twitter.com/tos"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Terms of Service
          </FooterLink>
          <FooterLink
            href="https://twitter.com/privacy"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Privacy Policy
          </FooterLink>
          <FooterLink
            href="https://support.twitter.com/articles/20170514"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Cookie Policy
          </FooterLink>
          <FooterLink
            href="https://help.twitter.com/resources/accessibility"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Accessibility
          </FooterLink>
          <FooterLink
            href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=adsinfo"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Ads info
          </FooterLink>
          <FooterLink
            href="https://blog.twitter.com"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Blog
          </FooterLink>
          <FooterLink
            href="https://status.twitterstat.us"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Status
          </FooterLink>
          <FooterLink
            href="https://careers.twitter.com"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Careers
          </FooterLink>
          <FooterLink
            href="https://about.twitter.com/press/brand-assets"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Brand Resources
          </FooterLink>
          <FooterLink
            href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Advertising
          </FooterLink>
          <FooterLink
            href="https://marketing.twitter.com"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Marketing
          </FooterLink>
          <FooterLink
            href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=twitterforbusiness"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            X for Business
          </FooterLink>
          <FooterLink
            href="https://developer.twitter.com"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Developers
          </FooterLink>
          <FooterLink
            href="https://twitter.com/i/directory/profiles"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Directory
          </FooterLink>
          <FooterLink href="/settings">Settings</FooterLink>
          <Copyright as="div">
            &copy; {new Date().getFullYear()} X Corp.
          </Copyright>
        </FooterNav>
      </Container>
      <Outlet />
    </>
  );
}

export default Home;
