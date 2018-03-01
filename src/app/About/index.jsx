import React, { Component } from 'react'
import { Contacts, ContactLink } from './styles'
import styled from 'styled-components'

import github from 'assets/svg/github.svg'
import bitbucket from 'assets/svg/bitbucket.svg'
import linkedin from 'assets/svg/linkedin.svg'
import twitter from 'assets/svg/twitter.svg'
import facebook from 'assets/svg/facebook.svg'
import gmail from 'assets/svg/gmail.svg'

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`

class About extends Component {
  render() {
    return (
      <Contacts>
        <div>My contact in internet @toxblh:</div>
        <div>
          <ContactLink href="https://github.com/Toxblh">
            <Icon src={github} alt="Github" /> Github
          </ContactLink>
        </div>
        <div>
          <ContactLink href="https://bitbucket.org/Toxblh/">
            <Icon src={bitbucket} alt="Bitbucket" /> Bitbucket
          </ContactLink>
        </div>
        <div>
          <ContactLink href="https://www.linkedin.com/in/toxblh">
            <Icon src={twitter} alt="Linkedin" /> Linkedin
          </ContactLink>
        </div>
        <div>
          <ContactLink href="https://twitter.com/Toxblh">
            <Icon src={linkedin} alt="Twitter" /> Twitter
          </ContactLink>
        </div>
        <div>
          <ContactLink href="https://www.facebook.com/toxblh">
            <Icon src={facebook} alt="Facebook" /> Facebook
          </ContactLink>
        </div>
        <div>
          <ContactLink href="mailto:toxblh@gmail.com">
            <Icon src={gmail} alt="Gmail" /> Gmail
          </ContactLink>
        </div>
      </Contacts>
    )
  }
}

export default About
