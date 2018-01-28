import React, { Component } from 'react'
import { Contacts, ContactLink } from './styles'

import github from 'assets/svg/github.svg'
import bitbucket from 'assets/svg/bitbucket.svg'
import linkedin from 'assets/svg/linkedin.svg'
import twitter from 'assets/svg/twitter.svg'
import facebook from 'assets/svg/facebook.svg'
import gmail from 'assets/svg/gmail.svg'

class About extends Component {
  render() {
    return (
      <Contacts>
        <div>My contact in internet @toxblh:</div>
        <div>
          <ContactLink href="https://github.com/Toxblh">
            <img src={github} alt="Github" /> Github
          </ContactLink>
        </div>
        <div>
          <ContactLink href="https://bitbucket.org/Toxblh/">
            <img src={bitbucket} alt="Bitbucket" /> Bitbucket
          </ContactLink>
        </div>
        <div>
          <ContactLink href="https://www.linkedin.com/in/toxblh">
            <img src={twitter} alt="Linkedin" /> Linkedin
          </ContactLink>
        </div>
        <div>
          <ContactLink href="https://twitter.com/Toxblh">
            <img src={linkedin} alt="Twitter" /> Twitter
          </ContactLink>
        </div>
        <div>
          <ContactLink href="https://www.facebook.com/toxblh">
            <img src={facebook} alt="Facebook" /> Facebook
          </ContactLink>
        </div>
        <div>
          <ContactLink href="mailto:toxblh@gmail.com">
            <img src={gmail} alt="Gmail" /> Gmail
          </ContactLink>
        </div>
      </Contacts>
    )
  }
}

export default About
