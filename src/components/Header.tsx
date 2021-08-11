import React from "react"
import styled from "styled-components"
import { GiJapan } from "react-icons/gi"

const HeaderStyle = styled.div`
  background-color: #005fb3;
  height: 4em;
  display: flex;
  justify-content: space-between;
  padding: 0 1em 0;
  color: white;
`

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: large;
  font-weight: bolder;
`

const MenuStyle = styled.div`
  display: flex;
  align-items: center;
`

function Header() {
  return (
    <HeaderStyle>
      <LogoStyle>
        <GiJapan />
        Japan Life
      </LogoStyle>
      <MenuStyle>MENU</MenuStyle>
    </HeaderStyle>
  )
}

export default Header
