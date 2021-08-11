import React from "react"
import styled from "styled-components"
import HeroImg from "../HeroImg.jpg"
import { GiJapan } from "react-icons/gi"

const AllHeroStyle = styled.div`
  background-color: #fff;
  padding-bottom: 1em;
`
const HeroStyle = styled.div`
  height: 5em;
  background-image: url(${HeroImg});
  background-position: center;
  background-size: cover;
  background-position: 50%;
  margin-bottom: 48px;
  position: relative;
`

const AvatarStyle = styled.div`
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -3em;
  bottom: -3em;
  background-color: #fff;
  height: 6em;
  width: 6em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px gray solid;
`
const IntroStyle = styled.div`
  font-size: 16px;
  text-align: center;
  padding: 0em 3em 0em;
`

const SubHeadStyle = styled.p`
  font-size: 14px;
`

function Hero() {
  return (
    <AllHeroStyle>
      <HeroStyle>
        <AvatarStyle>
          <GiJapan size={50} color={"red"} />
        </AvatarStyle>
      </HeroStyle>
      <IntroStyle>
        <h1>Residents In Japan</h1>
        <SubHeadStyle>
          For people already living in Japan - anything relevant living or
          working in Japan such as lifestyle.
        </SubHeadStyle>
      </IntroStyle>
    </AllHeroStyle>
  )
}

export default Hero
