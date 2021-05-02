import React, { useRef } from "react";
import { View } from "../../../components/Themed";
import { Text, Image, Animated, Dimensions } from "react-native";
import { typography } from "../../../common/style/typography";
import { postStyle } from "./postStyle";
import { StarActive } from "../../../common/icons/Star/StarActive";
import { StarInactive } from "../../../common/icons/Star/StarInactive";
import { connect } from "react-redux";
import RenderIf from "../../../common/components/RenderIf/RenderIf";
import activityActions from "../redux/activityActions";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface postOwnProps {
  post: any; // TODO: DEFINE API TYPE SPECS
}

interface postMapStateToPropsProps {
  likedPosts: string[];
}

interface postMapDispatchToPropsProps {
  likeArtwork: (artworkId: string) => void;
  dislikeArtwork: (artworkId: string) => void;
}

const postMapDispatchToProps: postMapDispatchToPropsProps = {
  likeArtwork: (artworkId: string) => activityActions.likeArtwork(artworkId),
  dislikeArtwork: (artworkId: string) =>
    activityActions.dislikeArtwork(artworkId),
};

const postMapStateToProps = (state: any) => {
  return {
    likedPosts: state.activity.likedArtworks,
  };
};

const FadeInView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

type postAllProps = postMapStateToPropsProps &
  postOwnProps &
  postMapDispatchToPropsProps;

const Post = (props: postAllProps) => {
  const { post, likedPosts, likeArtwork, dislikeArtwork } = props;

  return (
    <FadeInView>
      <View style={postStyle.postOverallContainer}>
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

        <Image
          style={postStyle.mainImageContainer}
          source={{
            uri: post.artwork.image,
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
    </FadeInView>
  );
};

export default connect(postMapStateToProps, postMapDispatchToProps)(Post);
