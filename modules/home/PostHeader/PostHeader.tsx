import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import LoadingPlaceholderBar from "../../../common/components/LoadingPlaceholderBar/LoadingPlaceholderBar";
import { typography } from "../../../common/style/typography";
import { ACTIVITY_FILTER_OPTIONS } from "../constants/activityFilterOptions";
import { postStyle } from "../post/postStyle";
import activityActions from "../redux/activityActions";

interface postHeaderOwnProps {
  post: any;
}

interface postHeaderMapStateToPropsProps {
  transitionLoading: boolean;
  selectedFilter: string;
}

interface postHeaderDispatchProps {
  selectArtworkId: (artworkId: number) => void;
}

const postHeaderMapStateToProps = (
  state: any
): postHeaderMapStateToPropsProps => {
  return {
    transitionLoading: state.activity.transitionLoading,
    selectedFilter: state.activity.filter,
  };
};

const postMapDispatchToProps: postHeaderDispatchProps = {
  selectArtworkId: (artworkId: number) =>
    activityActions.selectArtworkId(artworkId),
};

type postHeaderAllProps = postHeaderDispatchProps &
  postHeaderOwnProps &
  postHeaderMapStateToPropsProps;

// HEADER PROFILE PIC SELECTOR
const PostHeaderProfilePicture = (props: any) => {
  const { post, selectedFilter, loading } = props;

  const selectProfilePictureSource = (post: any) => {
    if (selectedFilter === ACTIVITY_FILTER_OPTIONS.CREATIONS) {
      return post.artwork.creator.user.avatar;
    } else if (selectedFilter === ACTIVITY_FILTER_OPTIONS.BIDS) {
      if (!post.event.bid) return "";
      return post.event.bid.bidder.user.avatar || "";
    }
  };

  return (
    <Image
      style={postStyle.profilePictureContainer}
      source={{
        uri: loading
          ? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          : selectProfilePictureSource(post),
      }}
    />
  );
};

// HEADER TEXT SELECTOR
const ProfileHeaderText = (props: any) => {
  const { post, selectedFilter, loading } = props;

  if (loading) {
    return <LoadingPlaceholderBar width={100} height={20} />;
  }

  if (selectedFilter === ACTIVITY_FILTER_OPTIONS.CREATIONS) {
    return (
      <View style={postStyle.headerTextContainer}>
        <Text style={typography.body1}>{post.artwork.name}</Text>
        <Text
          style={typography.caption}
        >{`By: ${post.artwork.creator.user.username}`}</Text>
      </View>
    );
  }

  if (selectedFilter === ACTIVITY_FILTER_OPTIONS.BIDS) {
    return (
      <View style={postStyle.headerTextContainerRow}>
        <Text style={[typography.body1, typography.medium]}>
          {post.event.bid ? post.event.bid.bidder.user.username : ""}
        </Text>
        <Text style={typography.body1}> made a bid of </Text>
        <Text style={[typography.body1, typography.medium]}>
          {post.event.bid
            ? `${post.event.bid.amount / 1000000000000000000}Ξ`
            : ""}
        </Text>
      </View>
    );
  }

  return <View />;
};

const PostHeader = (props: postHeaderAllProps) => {
  const { post, selectArtworkId, selectedFilter, transitionLoading } = props;
  const navigation = useNavigation();

  const navigateToArtwork = () => {
    selectArtworkId(post.artwork.id);
    navigation.navigate("IndividualArtwork");
  };

  return (
    <TouchableOpacity onPress={() => navigateToArtwork()}>
      <View style={postStyle.postHeaderContainer}>
        <PostHeaderProfilePicture
          post={post}
          selectedFilter={selectedFilter}
          loading={transitionLoading}
        />
        <ProfileHeaderText
          post={post}
          selectedFilter={selectedFilter}
          loading={transitionLoading}
        />
      </View>
    </TouchableOpacity>
  );
};

export default connect(
  postHeaderMapStateToProps,
  postMapDispatchToProps
)(PostHeader);
