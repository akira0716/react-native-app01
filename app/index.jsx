import "expo-router/entry";
import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import { Link, router } from "expo-router";
import {
  fetchDataList,
  addDataItem,
  deleteDataItem,
} from "../utils/supabaseFunction";
import { supabase } from "../utils/supabase";
import { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("akira.inaji.0716@gmail.com");
  const [password, setPassword] = useState("000000");

  const onPressAdd = async () => {
    // idは自動採番のため、指定しない。
    const data = {
      classification: "食費",
      amount: 1000,
      date: "2024-01-11",
      extra_area: null,
    };

    try {
      await addDataItem(data);
    } catch {
      console.error("error:adddata");
    }
  };

  const onPress = () => {
    router.replace("/LoginPage");
  };

  const handleLogin = async () => {
    try {
      const loginInfo = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      const user = loginInfo.data.user;

      if (loginInfo.error) {
        console.error("Authentication error:", loginInfo.error.message);
      } else {
        console.log("User signed in successfully:", user.email);

        router.replace("/page01");
      }
    } catch (error) {
      console.error("Error during authentication:", error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
        // options: {
        //   emailRedirectTo: "http://localhost:3000",
        // },
      });

      if (error) {
        console.error("Registration error:", error.message);
      } else {
        console.log("User registered successfully:", user);
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Registration error:", error.message);
      } else {
        console.log("Logout");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ホームページ</Text>
      <View style={styles.wrap}>
        <Text>Linkコンポーネント</Text>
        <Link href="/LoginPage" style={styles.link}>
          Go!!!
        </Link>
      </View>
      <View style={styles.wrap}>
        <Text>Buttonコンポーネント</Text>
        <Button title="アカウント追加" onPress={handleSignUp} />
      </View>
      <View style={styles.wrap}>
        <Text>Pressableコンポーネント</Text>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>ログイン</Text>
        </Pressable>
      </View>
      <View style={styles.wrap}>
        <Text>Pressableコンポーネント</Text>
        <Pressable style={styles.button} onPress={handleSignOut}>
          <Text style={styles.text}>ログアウト</Text>
        </Pressable>
      </View>
      <View style={styles.wrap}>
        <Text>Pressableコンポーネント</Text>
        <Pressable style={styles.button} onPress={onPressAdd}>
          <Text style={styles.text}>データ追加</Text>
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
