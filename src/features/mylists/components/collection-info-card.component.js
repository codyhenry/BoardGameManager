//types of lists: owned, custom (user created titles (dont buy etc)), wishlist, for sale (has price and lowest found, can link with garage sale app), sold (has date), crowdfunding (fund end date, estimated delivery, percentage complete)

import { CustomText } from "../../../components/text.component";
import { CustomChip } from "../../../components/chip.component";

import { InfoCard, Info, Section, SectionEnd } from "./info-card.styles";
import { SafeArea } from "../../../components/safe-area.component";

export const CollectionInfoCard = ({ collection = {} }) => {
  const {
    name = "Some Collection",
    collectionTag = "wishlist",
    numGames = 60,
  } = collection;

  return (
    <SafeArea>
      <InfoCard elevation={5}>
        <Info>
          <Section>
            <CustomText variant="label">{name} </CustomText>
          </Section>
          <Section>
            <CustomText variant="caption">{numGames} Items</CustomText>
            <SectionEnd>
              <CustomChip category={collectionTag} />
            </SectionEnd>
          </Section>
        </Info>
      </InfoCard>
    </SafeArea>
  );
};
