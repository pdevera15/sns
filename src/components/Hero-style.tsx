import styled from "styled-components"
import HeroImg from "../HeroImg.jpg"

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
export { AllHeroStyle, HeroStyle, AvatarStyle, IntroStyle, SubHeadStyle }
