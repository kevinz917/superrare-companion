import React from "react";
import { Text, Image, SafeAreaView, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Spacer from "../../common/components/Spacer/Space";
import { buttonStyles } from "../../common/style/buttonStyles";
import { typography } from "../../common/style/typography";
import { View } from "../../components/Themed";
import { postStyle } from "../home/post/postStyle";
import PostHeader from "../home/PostHeader/PostHeader";
import { selectedPostSelector } from "../home/redux/activitySelectors";
import { IndividualArtworkStyles } from "./IndividualArtworkStyle";
import { useNavigation } from "@react-navigation/core";

interface individualArtworkMapStateToPropsProps {
  selectedPost: any;
}

const individualArtworkMapStateToProps = (
  state: any
): individualArtworkMapStateToPropsProps => {
  return {
    selectedPost: selectedPostSelector(state),
  };
};

type individualArtworkOwnProps = individualArtworkMapStateToPropsProps;

const IndividualArtwork = (props: individualArtworkOwnProps) => {
  const { selectedPost } = props;
  const navigation = useNavigation();

  const openLink = async (token: any) => {
    const url = `https://etherscan.io/address/${token}`;
    navigation.navigate("ContractAddress");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <PostHeader post={selectedPost} />
        <Image
          style={postStyle.mainImageContainer}
          source={{
            uri: selectedPost.artwork.image,
          }}
        />
        <View style={IndividualArtworkStyles.bottomContainer}>
          <View style={IndividualArtworkStyles.sideBySideContainer}>
            <View style={IndividualArtworkStyles.individualContainer}>
              <Text style={typography.caption}>Views</Text>
              <Spacer size="xsmall" />
              <Text style={[typography.header2, typography.medium]}>
                {selectedPost.artwork.viewCount}
              </Text>
            </View>
            <View style={IndividualArtworkStyles.individualContainer}>
              <Text style={typography.caption}>Artist</Text>
              <Spacer size="xsmall" />
              <Text
                style={[typography.header2, typography.medium]}
                numberOfLines={1}
              >
                {selectedPost.artwork.creator.user.username}
              </Text>
            </View>
          </View>
          <Spacer size="xlarge" />
          <Text style={typography.caption}>Description</Text>
          <Spacer size="xsmall" />
          <Text style={typography.body1}>
            {selectedPost.artwork.description}
          </Text>
          <Spacer size="xlarge" />
          <TouchableOpacity
            onPress={() => openLink(selectedPost.artwork.contractAddress)}
            style={buttonStyles.secondary}
          >
            <Text>View Token</Text>
          </TouchableOpacity>
          <Spacer size="xlarge" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default connect(
  individualArtworkMapStateToProps,
  null
)(IndividualArtwork);
