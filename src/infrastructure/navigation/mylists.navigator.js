import React from "react";
/*
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyListsScreen } from "../../features/mylists/screens/mylists.screen";
//might rename to collections screen
import { ListDetailScreen } from "../../features/mylists/screens/list-detail.screen";
*/
const MylistStack = createNativeStackNavigator();
export const MylistsNavigator = () => {
  return (
    <MylistStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <MylistStack.Screen
        name="MyLists"
        component={MyListsScreen}
        //show all collections in myList tab - default page
      />
      <MylistStack.Screen
        name="Collection"
        component={ListDetailScreen}
        //show a list of games in a collection
      />
      <MylistStack.Screen
        name="Game"
        component={GameScreen}
        //show a specific game
      />
      <MylistStack.Screen
        name="GameDetail"
        component={GameDetailScreen}
        //show game details
      />
    </MylistStack.Navigator>
  );
};
