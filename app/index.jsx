import "expo-router/entry";
import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import { Link, router } from "expo-router";
import {
  fetchDataList,
  addDataItem,
  deleteDataItem,
} from "../utils/supabaseFunction";

const Home = () => {
  const onPressAdd = async () => {
    // idは自動採番のため、指定しない。
    const data = {
      classification: "食費",
      amount: 1000,
      date: "2024-01-11",
      extra_area: null,
    };

    await addDataItem(data);
  };

  const onPress = () => {
    router.replace("/page01");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ホームページ</Text>
      <View style={styles.wrap}>
        <Text>Linkコンポーネント</Text>
        <Link href="/page01" style={styles.link}>
          Go!!!
        </Link>
      </View>
      <View style={styles.wrap}>
        <Text>Buttonコンポーネント</Text>
        <Button title="Go!!!" onPress={onPress} />
      </View>
      <View style={styles.wrap}>
        <Text>Pressableコンポーネント</Text>
        <Pressable style={styles.button} onPress={onPressAdd}>
          <Text style={styles.text}>GO!!!</Text>
        </Pressable>
      </View>
    </View>
  );
};

//#region Style
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  text: {
    color: "white",
  },
  wrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
});
//#endregion

export default Home;
