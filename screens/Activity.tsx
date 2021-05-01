import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { fetchPosts } from "../common/api/postApi";
import { View } from "../components/Themed";
import Post from "../modules/home/post/post";
import RenderIf from "../common/components/RenderIf/RenderIf";

const styles = StyleSheet.create({
  pageContainer: {
    width: "100%",
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
    <View style={styles.pageContainer}>
      <SafeAreaView style={{ width: "100%" }}>
        <ScrollView>
          <RenderIf value={!isLoading}>
            {posts.map((post) => (
              <Post post={post} />
            ))}
          </RenderIf>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
