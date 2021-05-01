import * as React from "react";
import { View } from "../../../components/Themed";
import { Text, Image } from "react-native";
import { typography } from "../../../common/style/typography";
import { postStyle } from "./postStyle";

const Post = (props: any) => {
  const { post } = props;

  return (
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
  );
};

export default Post;
