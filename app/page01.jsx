import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Page() {
  const onClick = () => {
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ページ01</Text>
      <Button title="戻る" onPress={onClick} />
    </View>
  );
}

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
});
