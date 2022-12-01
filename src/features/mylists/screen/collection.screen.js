/*
mylists shows *collections* shows games
get all the games from this collection and display them here
*/
import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, Pressable } from "react-native";

import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";
import { CollectionInfoCard } from "../components/collection-info-card.component";
import { LoadingComponent } from "../../../components/activity-indicator.component";

//import { GamesContext } from "../../../services/restaurants/restaurants.context";

const CollectionsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
//navigate prop comes from stack navigator
export const CollectionsScreen = ({ navigation }) => {
  const { collections, isLoading, error } = useContext(CollectionsContext);
  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <CollectionsList
          data={collections}
          renderItem={({ item }) => (
            <>
              <Pressable
                onPress={() =>
                  navigation.navigate("CollectionDetail", { collection: item })
                }
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              >
                <Spacer side="bottom" size="md">
                  <CollectionInfoCard collection={item} />
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
