import styled from "styled-components/native";

import { Card } from "react-native-paper";

export const InfoCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const InfoCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.spacing.md};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
