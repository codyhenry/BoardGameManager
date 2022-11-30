//display all collections
//types of lists: owned, owned custom (user created titles (dont buy etc)), wishlist, for sale (has price and lowest found, can link with garage sale app), sold (has date), crowdfunding (fund end date, estimated delivery, percentage complete)
/* 
  *mylists* shows collections shows games
  get all collections and display them here
*/
import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, Pressable } from "react-native";

import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CollectionInfoCard } from "../components/restuarant-info-card.component";
import { LoadingComponent } from "../../../components/loading/activity-indicator.component";

//import { GamesContext } from "../../../services/restaurants/restaurants.context";

const CollectionsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
//navigate prop comes from stack navigator
export const MyListsScreen = ({ navigation }) => {
  //get list of collections
  //const { collections, isLoading, error } = useContext(CollectionsContext);
  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <CollectionsList
          data={collections}
          //loop and display each collection
          renderItem={({ item }) => (
            <>
              <Pressable
                onPress={() =>
                  navigation.navigate("Collection", { collection: item })
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
