import React, { useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  RefreshControl,
  FlatList,
} from "react-native";
import { Fragment } from "react";
import { connect } from "react-redux";
import { View } from "../../components/Themed";
import Post from "./post/post";
import RenderIf from "../../common/components/RenderIf/RenderIf";
import { typography } from "../../common/style/typography";
import activityActions from "./redux/activityActions";
import { activityStyles, loadingStyle } from "./ActivityStyle";
import { SUPERRARE_MAIN_LOGO } from "../../common/constants/brand";
import FloatingFilterContainer from "./FloatingFilterContainer.tsx/FloatingFilterContainer";

interface mapDispatchProps {
  fetchActivityItems: () => void;
}

interface mapStateToProps {
  loading: boolean;
  posts: any;
  lastFetchedArtworkIndex: number;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchActivityItems: () => dispatch(activityActions.fetchActivity(0)),
  };
};

const mapStateToProps = (state: any): mapStateToProps => {
  return {
    loading: state.activity.loading,
    posts: state.activity.posts,
    lastFetchedArtworkIndex: state.activity.lastFetchedArtworkIndex,
  };
};

type activityAllProps = mapDispatchProps & mapStateToProps;

const ActivityFeed = (props: activityAllProps) => {
  const { loading, posts, fetchActivityItems } = props;

  useEffect(() => {
    const onMount = async () => {
      fetchActivityItems();
    };
    onMount();
  }, []);

  return (
    <Fragment>
      <RenderIf value={!loading}>
        <View style={activityStyles.pageContainer}>
          <SafeAreaView>
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={fetchActivityItems}
                />
              }
            ></ScrollView>
            <FlatList
              data={posts}
              renderItem={({ item }) => <Post post={item} />}
              initialNumToRender={5}
              onEndReachedThreshold={0.2}
              onEndReached={() => fetchActivityItems()}
            />
          </SafeAreaView>
          <FloatingFilterContainer />
        </View>
      </RenderIf>
      <RenderIf value={loading}>
        <View style={loadingStyle.container}>
          <Image
            style={loadingStyle.hero}
            source={{
              uri: SUPERRARE_MAIN_LOGO,
            }}
          />
          <Text style={typography.body1}>GETTING ART READY ...</Text>
        </View>
      </RenderIf>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFeed);
