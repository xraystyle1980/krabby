import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SVG from '../components/SVG';
import '../styles/global';
import styled from 'react-emotion';
import { rotate, UpBubblesOne, UpBubblesOneTop, UpBubblesTwo, UpBubblesTwoTop, UpBubblesThree, UpBubblesThreeTop, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import logotopaz from '../images/logo-topaz.svg';
import logofreshtix from '../images/logo-freshtix.svg';
import logorobit from '../images/logo-robit.svg';
import logopayscape from '../images/logo-payscape.svg';
import dribbble from '../images/icon-dribbble.svg';
import instagram from '../images/icon-instagram.svg';
import linkedin from '../images/icon-linkedin.svg';
import logotd from '../images/logo-td.svg';
import bottomburm from '../images/bottom-burm.svg';
import howdy from '../images/howdy.svg';
import anglerbright from '../images/angler-bright.png';
import anglerdark from '../images/angler-dark.png';
import '../assets/css/krabby.scss';
import { FaChevronRight } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import FloatingLabel, { floatingStyles, focusStyles, inputStyles, labelStyles, spanStyles, buttonStyles, textareaStyles } from 'floating-label-react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';


const HeaderContainer = styled.div`
  ${tw('justify-center items-center flex z-50')};
  padding: .5rem 4rem;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
const SunRaysfromGod = styled(ParallaxLayer)``;
const AnglerLayer = styled(ParallaxLayer)`
  @media (max-width: 900px) {
    display: none;
  }
`;
const Angler = styled.div`
  position: relative;
  left: -2rem;
  max-width: 100%;
`;
const FormTitle = styled.h3`
  ${tw('text-white mb-0')};
  text-shadow: -2px 4px 32px rgba(0, 0, 0, 1);
  font-size: 2rem;
  font-family: 'Abril Fatface', cursive;
  color: #FFEE00;
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 1.85em;
   }
`;
const inputStyle = {
  floating: {
    ...floatingStyles,
    color: 'yellow',
  },
  focus: {
    ...focusStyles,
    borderColor: 'yellow'
  },
  input: {
    ...inputStyles,
    fontFamily: 'Source Serif Pro, serif',
    fontWeight: '700',
    borderBottomWidth: '2',
    borderColor: '#D81159',
    width: '100%',
    height: '4rem',
    color: 'white',
    padding: '1rem 0 0 1rem'
  },
  label: {
    ...labelStyles,
    marginTop: '.5em',
    width: '100%',
    color: 'white'
  },
  span: {
    ...spanStyles,
    fontFamily: 'Oswald, sans-serif',
    fontWeight: '700',
    fontSize: '.85rem',
    top: '1rem',
    left: '1rem'
  }
}
const OceanBG = styled(ParallaxLayer)`
`;
const Container = styled.div`
  padding: 0 4rem;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
const Navigation = styled.div`
  ${tw('w-full')};
  padding-bottom:0;
`;
const NavContact = styled.a``;
const ButtonCTA = styled.button``;
const Hero = styled.div`
  ${tw('w-full')};
  display: grid;
  justify-items: center;
  grid-template-columns:
        [viewport-start] minmax(1em, 1fr)
        [container-start] minmax(0, 30em) [container-end]
        minmax(1em, 1fr) [viewport-end];
`;
const BigTitle = styled.h1`
  ${tw('text-white mb-0')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  font-size: 3em;
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 1.85em;
   }
`;
const Subtitle = styled.p`
  ${tw('text-white')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  line-height: 1.45em;
  font-size: 1.125em;
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 1em;
   }
`;
const Description = styled.p`
  ${tw('text-white')};
  line-height: 1.45em;
`;
const ProjectWrapper = styled.div`
  display: grid;
`;
const ProjectCardTitle = styled.h4`
  ${tw('text-white uppercase')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;
const ProjectCardDescription = styled.p`
  ${tw('text-white')};
  line-height: 1.45em;
`;




class App extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={6}>
        <Helmet>
          <title>Matt Trice Design | trice.design | UX Design, Front End Development</title>
          <meta name="description" content="I am an Atlanta based designer specializing in UI and Web Design, UX Development, and prototyping." />
        </Helmet>
        <OceanBG offset={0} speed={0} factor={6} className={'oceanbg'}   />
        <SunRaysfromGod offset={0} speed={.25} factor={6}>
          <Img alt={'Sun rays from god'} fluid={this.props.data.imageSunRays.childImageSharp.fluid} />
        </SunRaysfromGod>
        <ParallaxLayer offset={0} speed={1}>
          <UpBubblesOneTop>
            <SVG icon="bubble" width={3} left="36%" top="32%" />
            <SVG icon="bubble" width={2} left="40%" top="34%" />
            <SVG icon="bubble" width={4} left="42%" top="33%" />
          </UpBubblesOneTop>
          <UpBubblesTwoTop>
            <SVG icon="bubble" width={4} left="34%" top="32%" />
            <SVG icon="bubble" width={3} left="41%" top="34%" />
            <SVG icon="bubble" width={2} left="39%" top="31%" />
          </UpBubblesTwoTop>
          <UpBubblesThreeTop>
            <SVG icon="bubble" width={2} left="32%" top="36%" />
            <SVG icon="bubble" width={4} left="38%" top="30%" />
            <SVG icon="bubble" width={3} left="31%" top="35%" />
          </UpBubblesThreeTop>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1} factor={2}>
          <UpBubblesOne>
            <SVG icon="bubble" width={3} left="26%" top="32%" />
            <SVG icon="bubble" width={2} left="30%" top="34%" />
            <SVG icon="bubble" width={4} left="32%" top="33%" />
          </UpBubblesOne>
          <UpBubblesTwo>
            <SVG icon="bubble" width={4} left="24%" top="32%" />
            <SVG icon="bubble" width={3} left="31%" top="34%" />
            <SVG icon="bubble" width={2} left="29%" top="31%" />
          </UpBubblesTwo>
          <UpBubblesThree>
            <SVG icon="bubble" width={2} left="22%" top="32%" />
            <SVG icon="bubble" width={4} left="28%" top="34%" />
            <SVG icon="bubble" width={3} left="26%" top="31%" />
          </UpBubblesThree>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1} factor={2}>
          <UpBubblesOne>
            <SVG icon="bubble" width={3} left="66%" top="28%" />
            <SVG icon="bubble" width={2} left="70%" top="38%" />
            <SVG icon="bubble" width={4} left="72%" top="30%" />
          </UpBubblesOne>
          <UpBubblesTwo>
            <SVG icon="bubble" width={4} left="64%" top="30%" />
            <SVG icon="bubble" width={3} left="71%" top="14%" />
            <SVG icon="bubble" width={2} left="69%" top="11%" />
          </UpBubblesTwo>
          <UpBubblesThree>
            <SVG icon="bubble" width={2} left="62%" top="22%" />
            <SVG icon="bubble" width={4} left="68%" top="44%" />
            <SVG icon="bubble" width={3} left="66%" top="21%" />
          </UpBubblesThree>
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={-0.45} style={{ display: 'grid', justifyContent: 'right', height: 'auto' }}>
          <Img alt={'Giant Squid in the background'} fluid={this.props.data.imageSquidSilhouette.childImageSharp.fluid} className="squid-silhouette" />
        </ParallaxLayer>
        <ParallaxLayer offset={4.4} speed={-0.4} factor={1} className={'background-01'} />
        <ParallaxLayer offset={4} speed={-0.3} factor={2} className={'background--cliffs'}>
          <UpBubblesOne>
            <SVG icon="bubble" width={3} left="26%" top="32%" />
            <SVG icon="bubble" width={2} left="30%" top="34%" />
            <SVG icon="bubble" width={4} left="32%" top="33%" />
          </UpBubblesOne>
          <UpBubblesTwo>
            <SVG icon="bubble" width={4} left="24%" top="32%" />
            <SVG icon="bubble" width={3} left="31%" top="34%" />
            <SVG icon="bubble" width={2} left="29%" top="31%" />
          </UpBubblesTwo>
          <UpBubblesThree>
            <SVG icon="bubble" width={2} left="22%" top="36%" />
            <SVG icon="bubble" width={4} left="28%" top="30%" />
            <SVG icon="bubble" width={3} left="21%" top="35%" />
          </UpBubblesThree>
          <UpBubblesOne>
            <SVG icon="bubble" width={3} left="66%" top="28%" />
            <SVG icon="bubble" width={2} left="70%" top="38%" />
            <SVG icon="bubble" width={4} left="72%" top="30%" />
          </UpBubblesOne>
          <UpBubblesTwo>
            <SVG icon="bubble" width={4} left="64%" top="30%" />
            <SVG icon="bubble" width={3} left="71%" top="14%" />
            <SVG icon="bubble" width={2} left="69%" top="11%" />
          </UpBubblesTwo>
          <UpBubblesThree>
            <SVG icon="bubble" width={2} left="62%" top="22%" />
            <SVG icon="bubble" width={4} left="68%" top="44%" />
            <SVG icon="bubble" width={3} left="66%" top="21%" />
          </UpBubblesThree>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <Container>
            <ProjectWrapper className="project__grid--imageRight">
              <Img alt={'Topaz Designs'} fluid={this.props.data.imageShotttTopaz.childImageSharp.fluid} className="shottt-topaz" />
              <ProjectCardTitle className="project__title">WEB DESIGN, UX DEVELOPMENT</ProjectCardTitle>
              <ProjectCardDescription className="project__description">
                <img alt="Logo for Topaz" src={logotopaz} className="project__logo" /><br />
                Topaz is a blockchain SaaS product. Working alongside a talented branding designer, I designed and developed a single page static site running on <span>Gatsby.js</span> and React.<br />
                <Link to="/topaz">
                  <button className="btn btn--actionjackson">
                    <span className="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                  </button>
                </Link>
              </ProjectCardDescription>
            </ProjectWrapper>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1}>
          <Container>
            <ProjectWrapper className="project__grid--imageLeft">
              <Img alt={'Freshtix Designs'} fluid={this.props.data.imageShotttFreshtix.childImageSharp.fluid} className="shottt-freshtix" />
              <ProjectCardTitle className="project__title">PRODUCT DESIGN, MOBILE APP DESIGN, UI & UX, PROTOTYPING</ProjectCardTitle>
              <ProjectCardDescription className="project__description">
                <img alt="Logo for Freshtix" src={logofreshtix} className="project__logo" /><br />
                This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.<br />
                <Link to="/freshtix">
                  <button className="btn btn--actionjackson">
                    <span className="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                  </button>
                </Link>
              </ProjectCardDescription>
            </ProjectWrapper>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1}>
          <Container>
            <ProjectWrapper className="project__grid--imageRight">
              <Img alt={'Robit Designs'} fluid={this.props.data.imageShotttRobit.childImageSharp.fluid} className="shottt-robit" />
              <ProjectCardTitle className="project__title">APP CONCEPT, PRODUCT DESIGN, UI & UX, PROTOTYPE</ProjectCardTitle>
              <ProjectCardDescription className="project__description">
                <img alt="Logo for Robit" src={logorobit} className="project__logo" /><br />
                Robit is an app that aims to introduce design thinking with board style organization. Being able to see where your idea sits in it’s creative lifecycle will help move it to completion<br />
                <Link to="/robit">
                  <button className="btn btn--actionjackson">
                    <span className="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                  </button>
                </Link>
              </ProjectCardDescription>
            </ProjectWrapper>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={1}>
          <Container>
            <ProjectWrapper className="project__grid--imageLeft">
            <Img alt={'Payscape Designs'} fluid={this.props.data.imageShotttPayscape.childImageSharp.fluid} className="shottt-payscape" />
              <ProjectCardTitle className="project__title">WEBSITE DESIGN, UI & UX, WORDPRESS DESIGN</ProjectCardTitle>
              <ProjectCardDescription className="project__description">
                <img alt="logo for Payscape" src={logopayscape} className="project__logo" /><br />
                Payscape is an Atlanta based Financial Technology company that provides small to mid-size business owners with financial technologies that allow them to accept payments, streamline their business, and increase cash flow.<br />
                <Link to="/payscape">
                  <button className="btn btn--actionjackson">
                    <span className="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                  </button>
                </Link>
              </ProjectCardDescription>
            </ProjectWrapper>
          </Container>
        </ParallaxLayer>

        <AnglerLayer offset={4.8} speed={-0.15}>
          <Angler className={'anglerFish'}>
            <img className="bottom" src={anglerdark} alt="This is a dark Angler Fish" />
            <img className="top" src={anglerbright} alt="This is an illuminated Angler Fish" />
          </Angler>
        </AnglerLayer>

        <ParallaxLayer offset={5} speed={-0}>
          <Container>
            <Hero>
              <FormTitle className="item--contained">Let's have a conversation</FormTitle>
              <form className="contact__form item--contained"  name="contact" method="post" action="https://formspree.io/matt@trice.design" method="POST">
                <FloatingLabel id='name' name='name' placeholder='Name' type='text' styles={inputStyle} required />
                <FloatingLabel id='email' name='email' placeholder='Email' type='email' styles={inputStyle} required />
                <FloatingLabel id='comments' name='comments' placeholder='What are you working on?' styles={inputStyle} type='text' requried />
                <button className="btn btn--actionjackson--full" type="submit" styles={inputStyle}><span className="btn__text">Send message</span> <FaPaperPlane size="1.45em" /></button>
              </form>
            </Hero>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}>
          <HeaderContainer className="header__container">
            <Navigation>
              <ul className="nav__main">
                <li>
                  <Link to="/" className=""><img alt="trice.design Logo" src={logotd} className="logo__main" /></Link>
                </li>
                <li>
                  <ul className="social-icons">
                    <li className="contact">
                      <NavContact onClick={() => this.parallax.scrollTo(5)}>Contact</NavContact>
                    </li>
                    <li><a href="https://dribbble.com/trice" title="Follow me on Dribbble">
                      <img alt="Dribbble" src={dribbble} /></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/matt-trice-5053b325/" title="Serious as fuck">
                      <img alt="Linked In" src={linkedin} /></a>
                    </li>
                    <li><a href="https://www.instagram.com/trice.design/" title="Follow me on Instagram">
                      <img alt="Instagram" src={instagram} /></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Navigation>
          </HeaderContainer>
        </ParallaxLayer>

        <ParallaxLayer speed={0.5} offset={.1}>
          <Container>
            <Hero>
              <img alt="Howdy, Partner!" src={howdy} className="item--contained howdy__main" />
              <BigTitle className="item--contained">
                My name is Matt Trice.
              </BigTitle>
              <Subtitle className="item--contained">I am an Atlanta based designer specializing in UI and Web Design, UX Development, and prototyping. From concept to completion, I love having a hand in the full life cycle of an idea.</Subtitle>
              <ButtonCTA className="item--contained btn btn--actionjackson" onClick={() => this.parallax.scrollTo(5)}><span className="btn__text">Let's make something cool</span> <FaChevronRight size="1.45em" /></ButtonCTA>
            </Hero>
          </Container>
        </ParallaxLayer>
      </Parallax>

    )
  }
}

export default App

export const pageQuery = graphql`
query {
imageSunRays: file(relativePath: { eq: "sunraysfromgod.png" }) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
      }
    }
  }
imageShotttTopaz: file(relativePath: { eq: "shottt-topaz.webp" }) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
      }
    }
  }
imageShotttFreshtix: file(relativePath: { eq: "shottt-freshtix.webp" }) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
      }
    }
  }
imageShotttRobit: file(relativePath: { eq: "shottt-robit.webp" }) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
      }
    }
  }
imageShotttPayscape: file(relativePath: { eq: "shottt-payscape.webp" }) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
      }
    }
  }
imageSquidSilhouette: file(relativePath: { eq: "squid-silhouette.webp" }) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
      }
    }
  }
}
`
