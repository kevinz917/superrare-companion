import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../common/style/colors";
import { typography } from "../../common/style/typography";

export const bottomTabNavigatorStyle = StyleSheet.create({
  container: {
    borderTopColor: "black",
    borderTopWidth: 1.5,
  },
});

interface tabBarIconProps {
  name: React.ComponentProps<typeof Feather>["name"];
  focused: boolean;
}

// Bottom Nav Bar Icon
export function TabBarIcon(props: tabBarIconProps) {
  const { name, focused } = props;

  return (
    <Feather
      size={25}
      style={{ marginBottom: -3 }}
      color={focused ? colors.grey600 : colors.grey300}
      name={name}
    />
  );
}

interface tabBarTextOwnProps {
  label: string;
  focused: boolean;
}

// Bottom Nav Bar Text
export const TabBarText = (props: tabBarTextOwnProps) => {
  const { focused, label } = props;

  return (
    <Text
      style={[
        typography.body2,
        { color: focused ? colors.grey600 : colors.grey300 },
        { fontWeight: focused ? "600" : "500" },
      ]}
    >
      {label}
    </Text>
  );
};
