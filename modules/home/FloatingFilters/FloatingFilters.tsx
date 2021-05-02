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
import Divider from "../../../common/components/Divider/Divider";
import RenderIf from "../../../common/components/RenderIf/RenderIf";

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

  const activityfilterOptionsKeys = Object.keys(ACTIVITY_FILTER_OPTIONS);

  return (
    <View
      style={[FloatingFiltersStyle.floatingFiltersContainer, shadows.shadow300]}
    >
      {activityfilterOptionsKeys.map((key, idx) => (
        <View>
          <TouchableOpacity
            style={FloatingFiltersStyle.filterRowButton}
            onPress={() => onFilterOptionClick(key)}
          >
            <Text style={typography.body1}>{ACTIVITY_FILTER_OPTIONS[key]}</Text>
          </TouchableOpacity>
          <RenderIf value={idx !== activityfilterOptionsKeys.length - 1}>
            <Divider />
          </RenderIf>
        </View>
      ))}
    </View>
  );
};

export default connect(
  null,
  floatingFiltersMapDispatchToProps
)(FloatingFilters);
