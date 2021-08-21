import React from "react"
import { GiJapan } from "react-icons/gi"

// Import Style
import {
  AllHeroStyle,
  HeroStyle,
  AvatarStyle,
  IntroStyle,
  SubHeadStyle,
} from "./Hero-style"

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
