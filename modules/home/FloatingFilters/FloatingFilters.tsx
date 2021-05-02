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
import { Fragment } from "react";

interface floatingFiltersOwnProps {
  onFilterClose: (active: boolean) => void;
}

interface floatingFilterDispatchProps {
  setFilterType: (filterType: any) => void;
}

interface floatingFilterMapStateToPropsProps {
  selectedFilter: string;
}

const floatingFiltersMapDispatchToProps: floatingFilterDispatchProps = {
  setFilterType: (filterType: any) =>
    activityActions.setFilterSelection(filterType),
};

const floatingFiltersMapStateToProps = (state: any) => {
  return {
    selectedFilter: state.activity.filter,
  };
};

type floatingFilterAllProps = floatingFiltersOwnProps &
  floatingFilterDispatchProps &
  floatingFilterMapStateToPropsProps;

const FloatingFilters = (props: floatingFilterAllProps) => {
  const { onFilterClose, setFilterType, selectedFilter } = props;

  const onFilterOptionClick = (filterType: any) => {
    onFilterClose(true);
    setFilterType(filterType);
  };

  const activityfilterOptionsKeys = Object.keys(ACTIVITY_FILTER_OPTIONS);

  return (
    <View
      style={[shadows.shadow300, FloatingFiltersStyle.floatingFiltersContainer]}
    >
      {activityfilterOptionsKeys.map((key, idx) => (
        <Fragment key={`${key} ${idx}`}>
          <TouchableOpacity
            style={FloatingFiltersStyle.filterRowButton}
            onPress={() => onFilterOptionClick(key)}
          >
            <Text
              style={[
                typography.body1,
                selectedFilter === key && typography.medium,
              ]}
            >
              {ACTIVITY_FILTER_OPTIONS[key]}
            </Text>
          </TouchableOpacity>
          <RenderIf value={idx !== activityfilterOptionsKeys.length - 1}>
            <Divider />
          </RenderIf>
        </Fragment>
      ))}
    </View>
  );
};

export default connect(
  floatingFiltersMapStateToProps,
  floatingFiltersMapDispatchToProps
)(FloatingFilters);
