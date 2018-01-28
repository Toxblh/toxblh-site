import styled from 'styled-components'

export const Header = styled.header`
    background: #333;
    height: 45px;
    position: relative;
`

export const HeaderLogo = styled.div`

`

export const HeaderCenter = styled.div`

`

export const HeaderNav = styled.nav`
    display: inline-block;
    top: 13px;
    position: relative;
`

export const NavItem = styled.div`
    padding-right: 15px;
    transition: .2s linear;
    color: white;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        opacity: .65;
    }
`

export const Footer = styled.footer`
    font-size: 12px;
    color: #AFAFAF;
    text-align: center;
    font-weight: 100;
    padding: 10px 0;
`
