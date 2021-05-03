import React, { useEffect, useRef } from "react";
import { Text, Image, FlatList } from "react-native";
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
import LoadingSpinner from "../../common/components/LoadingSpinner/LoadingSpinner";

interface mapDispatchProps {
  setInitialLoading: (state: boolean) => void;
  fetchActivityItems: (type: string) => void;
}

interface mapStateToProps {
  initialLoading: boolean;
  loading: boolean;
  posts: any;
  lastFetchedArtworkIndex: number;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setInitialLoading: (state: boolean) =>
      dispatch(activityActions.setInitialLoading(state)),
    fetchActivityItems: (type: string) =>
      dispatch(activityActions.fetchActivity(type)),
  };
};

const mapStateToProps = (state: any): mapStateToProps => {
  return {
    initialLoading: state.activity.initialLoading,
    loading: state.activity.loading,
    posts: state.activity.posts,
    lastFetchedArtworkIndex: state.activity.lastFetchedArtworkIndex,
  };
};

type activityAllProps = mapDispatchProps & mapStateToProps;

const ActivityFeed = (props: activityAllProps) => {
  const { loading, initialLoading, posts, fetchActivityItems } = props;
  const flatListRef: any = useRef();

  useEffect(() => {
    const onMount = async () => {
      fetchActivityItems("initial");
    };
    onMount();
  }, []);

  const toTop = () => {
    flatListRef.current.scrollToOffset({ animated: false, offset: 0 });
  };

  return (
    <Fragment>
      <RenderIf value={!initialLoading}>
        <View style={activityStyles.pageContainer}>
          <FlatList
            ref={flatListRef}
            data={posts}
            renderItem={({ item }) => <Post post={item} />}
            initialNumToRender={2}
            onEndReachedThreshold={0.2}
            onEndReached={() => fetchActivityItems("loadMore")}
            ListFooterComponent={<LoadingSpinner />}
            refreshing={loading}
            onRefresh={() => fetchActivityItems("refresh")}
          />
          <FloatingFilterContainer toTop={toTop} />
        </View>
      </RenderIf>

      <RenderIf value={initialLoading}>
        <View style={loadingStyle.container}>
          <Image
            style={loadingStyle.hero}
            source={{
              uri: SUPERRARE_MAIN_LOGO,
            }}
          />
          <Text style={[typography.body1, typography.italic]}>
            GETTING ART READY ...
          </Text>
        </View>
      </RenderIf>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFeed);
