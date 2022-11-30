import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { CollectionInfoCard } from "../../features/mylists/components/collection-info-card.component";
/*
import { MylistsNavigator } from "./mylists.navigator";
import { MarketNavigator } from "./market.navigator";*/

import { theme } from "../theme/index";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Lists: { true: "list", false: "list-outline" },
  Market: { true: "pricetag", false: "pricetag-outline" },
  Search: { true: "settings", false: "settings-outline" },
};

//if header is disabled, wrap these in a safe-area.component - needs import
const SearchScreen = () => <Text>Search</Text>;
const MyListsScreen = () => <Text>Search</Text>;
const MarketScreen = () => <Text>Search</Text>;

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = TAB_ICON[route.name][focused];
          //You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.brand.secondary,
        tabBarInactiveTintColor: theme.colors.ui.secondary,
        headerShown: false,
      })}
    >
      <Tab.Screen
        //The tabs will contain screens for stack navigation components
        //Need tab for myLists, Market, Settings, Search
        name="Lists"
        component={CollectionInfoCard}
      />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
