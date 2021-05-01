import * as React from "react";
import { View } from "../../../components/Themed";
import { Text, Image } from "react-native";
import { typography } from "../../../common/style/typography";
import { postStyle } from "./postStyle";

const Post = () => {
  return (
    <View style={postStyle.postOverallContainer}>
      <View style={postStyle.postHeaderContainer}>
        <Image
          style={postStyle.profilePictureContainer}
          source={{
            uri:
              "https://ipfs.pixura.io/ipfs/QmZSK99hHLJi91HgbooSWjEyQULNX94aWuL11vuvHEvPCz/icon.jpg",
          }}
        />
        <Text style={typography.body1}>Post info</Text>
      </View>
      <Image
        style={postStyle.mainImageContainer}
        source={{
          uri:
            "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60",
        }}
      />
      <View style={postStyle.postBottomContainer}>
        <Text>Like button</Text>
        <Text style={typography.caption}>By: Author Name</Text>
      </View>
    </View>
  );
};

export default Post;
