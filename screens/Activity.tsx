import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { fetchPosts } from "../common/api/postApi";
import { View } from "../components/Themed";
import Post from "../modules/home/post/post";
import RenderIf from "../common/components/RenderIf/RenderIf";
import { Fragment } from "react";
import { typography } from "../common/style/typography";

const styles = StyleSheet.create({
  pageContainer: {
    width: "100%",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  activityLoadingContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
  },
});

const loadingStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  hero: {
    width: 200,
    height: 40,
    marginBottom: 20,
  },
});

export default function TabOneScreen() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onMount = async () => {
      setIsLoading(true);
      const fetchedPosts: any = await fetchPosts(5, 0);
      setPosts(fetchedPosts);
      setIsLoading(false);
    };
    onMount();
  }, []);

  return (
    <Fragment>
      <RenderIf value={!isLoading}>
        <View style={styles.pageContainer}>
          <SafeAreaView style={{ width: "100%" }}>
            <ScrollView>
              {posts.map((post) => (
                <Post post={post} />
              ))}
            </ScrollView>
          </SafeAreaView>
        </View>
      </RenderIf>
      <RenderIf value={isLoading}>
        <View style={loadingStyle.container}>
          <Image
            style={loadingStyle.hero}
            source={{
              uri:
                "https://editorial.superrare.co/wp-content/uploads/2020/05/SuperRare_logo_black.png",
            }}
          />
          <Text style={typography.body1}>GETTING ART READY ...</Text>
        </View>
      </RenderIf>
    </Fragment>
  );
}
