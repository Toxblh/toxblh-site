import styled from 'styled-components'

export const Contacts = styled.div`
    text-align: center;
    margin: 20px;
`

export const ContactLink = styled.a.attrs({ href: (props) => props.href })`
    text-decoration: none;
    color: #000;
    margin: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`
