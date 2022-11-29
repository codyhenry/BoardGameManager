//board games will only have: name, price (updated by scrapers), image (from BGA), yearpublished

import { CustomText } from "../../../components/typography/text.component";

import {
  GameCard,
  GameCardCover,
  Info,
  Section,
  SectionEnd,
} from "./game-info-card.styles";

export const GameInfoCard = ({ game = {} }) => {
  const {
    name = "Some Game",
    photo = "https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_1280.png",
    links = [
      "amazon.com",
      "target.com",
      "miniaturemarket.com",
      "bgg.com",
      "kickstarter.com",
    ],
    year = 2015,
    bestPrice = 100.0,
  } = game;

  return (
    <GameCard elevation={5}>
      <GameCardCover key={name} source={{ uri: photo }} />
      <Info>
        <CustomText>BGG Rating and BGA Rating</CustomText>
        <Section>
          <CustomText variant="label">{name} </CustomText>
          <SectionEnd></SectionEnd>
        </Section>

        <Section>
          <CustomText>{year}</CustomText>
          <SectionEnd>
            <CustomText variant="label">{bestPrice}</CustomText>
          </SectionEnd>
        </Section>
      </Info>
    </GameCard>
  );
};
