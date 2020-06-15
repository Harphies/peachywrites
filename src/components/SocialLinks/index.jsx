import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Linkedin from './linkedin.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-cotnent: center;
`;

const Link = styled.a`
  display: block;
  border-radius: 7%;
  box-sizing: border-box;

  svg {
    fill: white;
  }
`;

const SocialLinks = ({size, hideMail, iconStyle}) => {
  const style = {
    height: size,
    width: size,
    margin: size / 8,
    ...iconStyle
  };

  return (
    <Wrapper className="social-links">
      <Link
        href="https://linkedin.com/in/ezzeddinabdullah"
        title="Linkedin"
        style={style}
        className="linkedin"
      >
        <Linkedin />
      </Link>
    </Wrapper>
  )
}

SocialLinks.propTypes = {
  size: PropTypes.number.isRequired,
  hideMail: PropTypes.bool,
  iconStyle: PropTypes.object,
}


SocialLinks.defaultProps = {
  hideMail: false
}

export {
  Facebook,
  Instagram,
  Email,
  Youtube,
  Website
}

export default SocialLinks;