import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function Page() {
  const [createBtnFlg, setCreateBtnFlg] = useState(true);
  const [loginBtnFlg, setLoginBtnFlg] = useState(true);

  const onPressBtnStyleChange = (mode, kind) => {
    let state = true;

    if (mode === 0) {
      state = false;
    }

    if (kind === 0) {
      setCreateBtnFlg(state);
    } else {
      setLoginBtnFlg(state);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          source={require("../assets/ReactNative01.png")}
        />
        <View style={{ position: "absolute", top: 40, right: 80, zIndex: 1 }}>
          <Image
            style={{
              width: 80,
              height: 80,
            }}
            source={require("../assets/Gear.png")}
          />
        </View>
        <View style={{ position: "absolute", top: 30, right: 50, zIndex: 1 }}>
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={require("../assets/Gear.png")}
          />
        </View>
      </View>
      <View style={styles.imgWrap}>
        <Image
          style={{
            width: "90%",
            height: "90%",
            borderRadius: 50,
          }}
          source={require("../assets/StartPageImg.png")}
        />
      </View>
      <View>
        <View style={styles.entryWrap1}>
          <Pressable
            onPressIn={() => onPressBtnStyleChange(0, 0)}
            onPressOut={() => onPressBtnStyleChange(1, 0)}
            style={createBtnFlg ? styles.button : styles.button2}
          >
            <Text style={styles.btnText}>New Account</Text>
          </Pressable>
        </View>
        <View style={styles.entryWrap2}>
          <Pressable
            onPress={() => router.setParams()}
            onPressIn={() => onPressBtnStyleChange(0, 1)}
            onPressOut={() => onPressBtnStyleChange(1, 1)}
            style={loginBtnFlg ? styles.button : styles.button2}
          >
            <Text style={styles.btnText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  titleWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "45%",
    position: "relative",
  },
  imgWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
  },
  entryWrap1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "25%",
    paddingTop: 30,
  },
  entryWrap2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "25%",
    paddingBottom: 30,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#50b9df",
    width: 250,
    height: 50,
    borderRadius: 50,
    elevation: 3,
  },
  button2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#50b9df",
    width: 250,
    height: 50,
    borderRadius: 50,
    elevation: 1,
    marginTop: 3,
  },
  btnText: {
    fontSize: 20,
  },
});
