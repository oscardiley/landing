import React from 'react';
import { Button } from '../globalStyles'
import { FooterContainer, FooterLinksContainer, FooterLinksItems, FooterLink, FooterLinksWrapper, FooterSubHeading, FooterSubscription, FooterSubText, Form, FormInput, FooterLinkTitle, SocialIcon, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLinks } from './Footer.elements';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Join our exclusive memmbership to receive the latestnews and trends
          </FooterSubHeading>
          <FooterSubText>
            You can unsusubscribe at any time
          </FooterSubText>
          <Form>
            <FormInput name="email" type="email" placeholder="Your email" />
            <Button fontBig>Subscribe</Button>
          </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/sign-up'>Testimonials</FooterLink>
              <FooterLink to='/sign-up'>Careers</FooterLink>
              <FooterLink to='/sign-up'>Investors</FooterLink>
              <FooterLink to='/sign-up'>Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/sign-up'>Testimonials</FooterLink>
              <FooterLink to='/sign-up'>Careers</FooterLink>
              <FooterLink to='/sign-up'>Investors</FooterLink>
              <FooterLink to='/sign-up'>Terms of Service</FooterLink>
            </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to='/sign-up'>Testimonials</FooterLink>
                <FooterLink to='/sign-up'>Careers</FooterLink>
                <FooterLink to='/sign-up'>Investors</FooterLink>
                <FooterLink to='/sign-up'>Terms of Service</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to='/sign-up'>Testimonials</FooterLink>
                <FooterLink to='/sign-up'>Careers</FooterLink>
                <FooterLink to='/sign-up'>Investors</FooterLink>
                <FooterLink to='/sign-up'>Terms of Service</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/'>
                <SocialIcon />
                ULTRA
              </SocialLogo>
              <WebsiteRights>ULTRA 2021</WebsiteRights>
              <SocialIcons>
                <SocialIconLinks href='/' target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLinks>
                <SocialIconLinks href='/' target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLinks>
                <SocialIconLinks href='/' target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                  <FaYoutube />
                </SocialIconLinks>
                <SocialIconLinks href='/' target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLinks>
                <SocialIconLinks href='/' target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLinks>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
      </FooterContainer>
    </>
      )
}

      export default Footer
