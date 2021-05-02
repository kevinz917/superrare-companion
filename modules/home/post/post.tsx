import React, { useRef } from "react";
import { View } from "../../../components/Themed";
import { Text, Image, Animated } from "react-native";
import { typography } from "../../../common/style/typography";
import { postStyle } from "./postStyle";
import { StarActive } from "../../../common/icons/Star/StarActive";
import { StarInactive } from "../../../common/icons/Star/StarInactive";
import { connect } from "react-redux";
import RenderIf from "../../../common/components/RenderIf/RenderIf";
import activityActions from "../redux/activityActions";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import FadeInView from "../../../common/components/FadeInView/FadeInView";
import { colors } from "../../../common/style/colors";

interface postOwnProps {
  post: any; // TODO: DEFINE API TYPE SPECS
}

interface postMapStateToPropsProps {
  likedPosts: string[];
}

interface postMapDispatchToPropsProps {
  likeArtwork: (artworkId: string) => void;
  dislikeArtwork: (artworkId: string) => void;
  selectArtworkId: (artworkId: number) => void;
}

const postMapDispatchToProps: postMapDispatchToPropsProps = {
  likeArtwork: (artworkId: string) => activityActions.likeArtwork(artworkId),
  dislikeArtwork: (artworkId: string) =>
    activityActions.dislikeArtwork(artworkId),
  selectArtworkId: (artworkId: number) =>
    activityActions.selectArtworkId(artworkId),
};

const postMapStateToProps = (state: any) => {
  return {
    likedPosts: state.activity.likedArtworks,
  };
};

type postAllProps = postMapStateToPropsProps &
  postOwnProps &
  postMapDispatchToPropsProps;

const Post = (props: postAllProps) => {
  const {
    post,
    likedPosts,
    likeArtwork,
    dislikeArtwork,
    selectArtworkId,
  } = props;
  const navigation = useNavigation();

  const navigateToArtwork = () => {
    selectArtworkId(post.artwork.id);
    navigation.navigate("IndividualArtwork");
  };

  return (
    <View style={postStyle.postOverallContainer}>
      <TouchableOpacity onPress={() => navigateToArtwork()}>
        <View style={postStyle.postHeaderContainer}>
          <Image
            style={postStyle.profilePictureContainer}
            source={{
              uri: post.event.creation.firstOwner.user.avatar,
            }}
          />
          <View style={postStyle.headerTextContainer}>
            <Text style={typography.body1}>{post.artwork.name}</Text>
            <Text
              style={typography.caption}
            >{`By: ${post.artwork.creator.user.username}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* <Image
        style={postStyle.mainImageContainer}
        source={{
          uri: post.artwork.image,
        }}
      /> */}
      <View
        style={{
          width: "100%",
          height: 400,
          backgroundColor: colors.grey200,
          marginBottom: 20,
        }}
      />
      <View style={postStyle.postBottomContainer}>
        <Text>{`${post.artwork.likeCount} Likes`}</Text>
        <RenderIf value={!likedPosts.includes(post.artwork.id)}>
          <TouchableWithoutFeedback
            onPress={() => likeArtwork(post.artwork.id)}
          >
            <StarInactive width={30} height={30} />
          </TouchableWithoutFeedback>
        </RenderIf>
        <RenderIf value={likedPosts.includes(post.artwork.id)}>
          <TouchableWithoutFeedback
            onPress={() => dislikeArtwork(post.artwork.id)}
          >
            <StarActive width={30} height={30} />
          </TouchableWithoutFeedback>
        </RenderIf>
      </View>
    </View>
  );
};

export default connect(postMapStateToProps, postMapDispatchToProps)(Post);
