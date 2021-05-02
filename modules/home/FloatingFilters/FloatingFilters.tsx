import React from "react";
import { typography } from "../../../common/style/typography";
import { View } from "../../../components/Themed";
import { Text } from "react-native";
import { FloatingFiltersStyle } from "./FloatingFiltersStyle";
import { shadows } from "../../../common/style/shadows";
import { ACTIVITY_FILTER_OPTIONS } from "../constants/activityFilterOptions";
import { TouchableOpacity } from "react-native-gesture-handler";
import activityActions from "../redux/activityActions";
import { connect } from "react-redux";

interface floatingFiltersOwnProps {
  onFilterClose: (active: boolean) => void;
}

interface floatingFilterDispatchProps {
  setFilterType: (filterType: any) => void;
}

const floatingFiltersMapDispatchToProps: floatingFilterDispatchProps = {
  setFilterType: (filterType: any) =>
    activityActions.setFilterSelection(filterType),
};

type floatingFilterAllProps = floatingFiltersOwnProps &
  floatingFilterDispatchProps;

const FloatingFilters = (props: floatingFilterAllProps) => {
  const { onFilterClose, setFilterType } = props;

  const onFilterOptionClick = (filterType: any) => {
    onFilterClose(true);
    setFilterType(filterType);
  };

  return (
    <View
      style={[FloatingFiltersStyle.floatingFiltersContainer, shadows.shadow300]}
    >
      {Object.keys(ACTIVITY_FILTER_OPTIONS).map((key) => (
        <TouchableOpacity
          style={FloatingFiltersStyle.filterRowButton}
          onPress={() => onFilterOptionClick(key)}
        >
          <Text style={typography.body1}>{ACTIVITY_FILTER_OPTIONS[key]}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default connect(
  null,
  floatingFiltersMapDispatchToProps
)(FloatingFilters);
