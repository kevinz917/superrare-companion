import React, { useState, useEffect } from "react";
import { View } from "../../../components/Themed";
import { FloatingContainerStyles } from "./FloatingFilterContainerStyles";
import { Text } from "react-native";
import { typography } from "../../../common/style/typography";
import RenderIf from "../../../common/components/RenderIf/RenderIf";
import FloatingFilters from "../FloatingFilters/FloatingFilters";
import { shadows } from "../../../common/style/shadows";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const FloatingFilterContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={[FloatingContainerStyles.container, shadows.shadow300]}>
      <RenderIf value={!isOpen}>
        <FloatingFilters onFilterClose={setIsOpen} />
      </RenderIf>
      <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
        <Text style={typography.body1}>Filter</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FloatingFilterContainer;
