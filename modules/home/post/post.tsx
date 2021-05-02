import React, { useRef } from "react";
import { View } from "../../../components/Themed";
import { Text, Image, Animated, Dimensions } from "react-native";
import { typography } from "../../../common/style/typography";
import { postStyle } from "./postStyle";

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

const Post = (props: any) => {
  const { post } = props;

  const win = Dimensions.get("window");

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
          <Text>Like button</Text>
        </View>
      </View>
    </FadeInView>
  );
};

export default Post;
