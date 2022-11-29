//display a particular list of games
//each game will link to a game-detail.screen
//types of lists: owned, owned custom (user created titles (dont buy etc)), wishlist, for sale (has price and lowest found, can link with garage sale app), sold (has date), crowdfunding (fund end date, estimated delivery, percentage complete)
import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, Pressable } from "react-native";

import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { GameInfoCard } from "../components/restuarant-info-card.component";
import { LoadingComponent } from "../../../components/loading/activity-indicator.component";

import { GamesContext } from "../../../services/restaurants/restaurants.context";

const GamesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
//navigate prop comes from stack navigator
export const GamesScreen = ({ navigation }) => {
  const { games, isLoading, error } = useContext(GamesContext);
  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <GameList
          data={games}
          renderItem={({ item }) => (
            <>
              <Pressable
                onPress={() =>
                  navigation.navigate("GameDetail", { game: item })
                }
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              >
                <Spacer side="bottom" size="md">
                  <GameInfoCard game={item} />
                </Spacer>
              </Pressable>
            </>
          )}
          ListFooterComponent={<Spacer side="bottom" size="xxl" />}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
