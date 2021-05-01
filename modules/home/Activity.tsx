import React, { useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  RefreshControl,
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

interface mapDispatchProps {
  fetchMockItem: () => void;
}

interface mapStateToProps {
  loading: boolean;
  posts: any;
}

const mapDispatchToProps: mapDispatchProps = {
  fetchMockItem: () => activityActions.fetchActivity(),
};

const mapStateToProps = (state: any): mapStateToProps => {
  return {
    loading: state.activity.loading,
    posts: state.activity.posts,
  };
};

type activityAllProps = mapDispatchProps & mapStateToProps;

const TabOneScreen = (props: activityAllProps) => {
  const { loading, posts } = props;
  const { fetchMockItem } = props;

  useEffect(() => {
    const onMount = async () => {
      fetchMockItem();
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
                  onRefresh={fetchMockItem}
                />
              }
            >
              {posts.map((post: any) => (
                <Post post={post} />
              ))}
            </ScrollView>
          </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(TabOneScreen);
