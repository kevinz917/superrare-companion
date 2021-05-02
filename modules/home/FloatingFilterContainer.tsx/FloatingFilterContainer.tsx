import React, { useState, useEffect } from "react";
import { View } from "../../../components/Themed";
import { FloatingContainerStyles } from "./FloatingFilterContainerStyles";
import { Text } from "react-native";
import { typography } from "../../../common/style/typography";
import RenderIf from "../../../common/components/RenderIf/RenderIf";
import FloatingFilters from "../FloatingFilters/FloatingFilters";
import { shadows } from "../../../common/style/shadows";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const FloatingFilterContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={[FloatingContainerStyles.container, shadows.shadow300]}>
      <RenderIf value={!isOpen}>
        <FloatingFilters onFilterClose={setIsOpen} />
      </RenderIf>
      <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
        <Feather size={25} name={"filter"} style={{ marginBottom: -3 }} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FloatingFilterContainer;
