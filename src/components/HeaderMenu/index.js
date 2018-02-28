import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.header`
  background: #333;
  height: 45px;
  position: relative;

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
`

const Content = styled.div`
  width: 800px;
  margin: 0 auto;
`

const Logo = styled.div`
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 5px 15px 0;
  position: absolute;
`

const LogoImage = styled.div`
  display: inline-block;
  background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzgiIGhlaWdodD0iNzUiIHZpZXdCb3g9IjAgMCA3OCA3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMEEwRTMiIGQ9Ik0zNy41IDU4TDQ4IDcwdjVIMzB2LTcuMnoiLz48cGF0aCBmaWxsPSIjMDBCREYyIiBkPSJNMzkuNiAyOWw4LjUgN3YxNUwzOSA1NS4yeiIvPjxwYXRoIGZpbGw9IiMwMEEwRTMiIGQ9Ik0zMCAzNC41bDcuOC01LjdMMzcgNTVsLTctMy4zeiIvPjxwYXRoIGZpbGw9IiNBQUUwRkEiIGQ9Ik00OSAwbDEwIDE2SDQ4djhsLTcuNSAyeiIvPjxwYXRoIGZpbGw9IiMwMEJERjIiIGQ9Ik0zMCA1NGw2LjIgMy02LjIgOHoiLz48cGF0aCBmaWxsPSIjQUFFMEZBIiBkPSJNNDggNTNsLTkgNCA5IDEwLjJ6Ii8+PHBhdGggZmlsbD0iIzAwQTBFMyIgZD0iTTQ4IDI2bC03LjIgMiA3LjIgNXoiLz48cGF0aCBkPSJNMzAgMjVjMiAuNSA2LjYgMi41IDYuNiAyLjVMMzAgMzJ2LTd6IiBmaWxsPSIjQUFFMEZBIi8+PHBhdGggZmlsbD0iIzAwQTBFMyIgZD0iTTYxIDE2aDNMNzcgMEg1MXpNMjcgMGgybDcuNSAyNi02LjUtM3YtN0gxNHoiLz48cGF0aCBmaWxsPSIjMDBCREYyIiBkPSJNNzcgMnYxNEg2NnpNMzguNSAyNkw0NyAwSDMxeiIvPjxwYXRoIGZpbGw9IiNBQUUwRkEiIGQ9Ik0xMiAxNkwyNS4xIDBIMHYyLjhMOSAxNnoiLz48cGF0aCBmaWxsPSIjMDBCREYyIiBkPSJNMCA1bDcgMTFIMHoiLz48L2c+PC9zdmc+')
    0 0 no-repeat;
  background-size: contain;
  width: 36px;
  height: 35px;
`

const Text = styled.div`
  display: inline-block;
  font-size: 20px;
  margin-left: -22px;
`

const Nav = styled.nav`
  display: inline-block;
  top: 13px;
  position: relative;
  left: 120px;

  a {
    padding-right: 15px;
    transition: 0.2s linear;

    &:hover {
      opacity: 0.65;
    }
  }
`

const FirstLetter = styled.span`
  color: transparent;
`

class HeaderMenu extends Component {
  render() {
    return (
      <Header>
        <Content>
          <Link to="/">
            <Logo>
              <LogoImage />
              <Text>
                <FirstLetter>T</FirstLetter>oxblh
              </Text>
            </Logo>
          </Link>
          <Nav>
            <Link to="/news">News</Link>
            <Link to="/about">About</Link>
          </Nav>
        </Content>
      </Header>
    )
  }
}

export default HeaderMenu
