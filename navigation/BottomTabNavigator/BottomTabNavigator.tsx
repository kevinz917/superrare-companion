import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import TabTwoScreen from "../../screens/TabTwoScreen";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
} from "../../types";
import { headerStyles } from "../../common/style/headerStyles";
import {
  bottomTabNavigatorStyle,
  TabBarIcon,
  TabBarText,
} from "./BottomTabNavigatorComponents";
import Activity from "../../modules/home/Activity";
import IndividualArtwork from "../../modules/IndividualArtwork/IndividualArtwork";
import { colors } from "../../common/style/colors";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Activity"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        style: bottomTabNavigatorStyle.container,
      }}
    >
      <BottomTab.Screen
        name="Activity"
        component={ActivityNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="globe" focused={focused} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarText label="Activity" focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="user" focused={focused} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarText label="user" focused={focused} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ActivityStackNavigator = createStackNavigator<TabOneParamList>();

function ActivityNavigator() {
  return (
    <ActivityStackNavigator.Navigator initialRouteName={"Activity"}>
      <ActivityStackNavigator.Screen
        name="Activity"
        component={Activity}
        options={{
          headerTitle: "Activity",
          headerStyle: headerStyles.defaultHeader,
          headerTintColor: colors.grey600,
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: "500",
          },
        }}
      />
      <ActivityStackNavigator.Screen
        name="IndividualArtwork"
        component={IndividualArtwork}
        options={{
          headerTitle: "Artwork",
          headerStyle: headerStyles.defaultHeader,
          headerTintColor: colors.grey600,
        }}
      />
    </ActivityStackNavigator.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{
          headerTitle: "Tab Two Title",
          headerStyle: headerStyles.defaultHeader,
        }}
      />
    </TabTwoStack.Navigator>
  );
}
