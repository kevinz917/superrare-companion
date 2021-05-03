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
  toTop: any;
  onFilterClose: (active: boolean) => void;
}

interface floatingFilterDispatchProps {
  setFilterType: (filterType: any) => void;
  fetchActivityItems: (type: string) => void;
}

interface floatingFilterMapStateToPropsProps {
  selectedFilter: string;
}

const floatingFiltersMapDispatchToProps: floatingFilterDispatchProps = {
  setFilterType: (filterType: any) =>
    activityActions.setFilterSelection(filterType),
  fetchActivityItems: (type: string) => activityActions.fetchActivity(type),
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
  const {
    toTop,
    onFilterClose,
    setFilterType,
    selectedFilter,
    fetchActivityItems,
  } = props;

  const onFilterOptionClick = (filterType: any) => {
    toTop();
    onFilterClose(true);
    setFilterType(filterType);
    fetchActivityItems("transition");
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
            onPress={() => onFilterOptionClick(ACTIVITY_FILTER_OPTIONS[key])}
          >
            <Text
              style={[
                typography.body1,
                selectedFilter === ACTIVITY_FILTER_OPTIONS[key] &&
                  typography.medium,
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
