import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { supabase } from "../utils/supabase";
import { useNavigation } from "expo-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigation();

  const handleLogin = async () => {
    try {
      const loginInfo = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      // ユーザー情報取得
      const user = loginInfo.data.user;

      if (loginInfo.error) {
        console.error("Authentication error:", loginInfo.error.message);
      } else {
        console.log("User signed in successfully:", user.email);

        // ページ遷移（パラメータ渡し）
        navigate.navigate("MyAccountPage", {
          message1: "Hello,",
          message2: "world!",
        });
      }
    } catch (error) {
      console.error("Error during authentication:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>ログイン</Text>
      </View>
      <View>
        <Text style={styles.formLabel}>メールアドレス</Text>
        <TextInput
          style={styles.email}
          onChangeText={setEmail}
          placeholder="Email-address"
          keyboardType="email-address"
          value={email}
          inputMode="email"
        />
        <Text style={styles.formLabel}>パスワード</Text>
        <TextInput
          style={styles.email}
          onChangeText={setPassword}
          placeholder="Password"
          keyboardType="visible-password"
          value={password}
          inputMode="numeric"
        />
      </View>
      <View style={styles.btnLogin}>
        <Button title="ログイン" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrap: {
    backgroundColor: "#50b9df",
    marginVertical: 40,
    padding: 10,
    borderRadius: 50,
    width: 300,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  email: {
    height: 40,
    width: 250,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  formLabel: {
    fontSize: 18,
  },
  btnLogin: {
    paddingVertical: 30,
  },
});

export default LoginPage;
