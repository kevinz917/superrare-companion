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

const styles = StyleSheet.create({
  pageContainer: {
    width: "100%",
    // padding: 16,
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

  useEffect(() => {
    const onMount = async () => {
      const fetchedPosts = await fetchPosts(5, 0);
    };
    onMount();
  }, []);

  return (
    <View style={styles.pageContainer}>
      <SafeAreaView style={{ width: "100%" }}>
        <ScrollView>
          <Post />
          <Post />
          <Post />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
