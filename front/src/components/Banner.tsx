import React from 'react'
import { StyledServiceSection } from './HeroSection' 
import Link from 'antd/es/typography/Link'

const Banner = () => {
  return (
    <StyledServiceSection>
        <h3>Less important title</h3>
        <Link to="/contact-us">Contact us</Link>
    </StyledServiceSection>
  )
}

export default Banner