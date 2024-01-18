import { Text, View, StyleSheet, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native"; // パラメータ受け取り
import Icon from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";

const MyAccountPage = () => {
  // 前の画面からパラメータを受け取る際に必要。
  const route = useRoute();
  // route.paramsから、前の画面遷移処理で指定したプロパティを受け取ることができる。
  const { userName } = route.params;

  const onPressBell = () => {
    console.log("Bellが押下されました。");
  };

  const onPressGear = () => {
    console.log("Gearが押下されました。");
  };

  const onPressShowData = () => {
    // 詳細データ画面へ遷移
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>マイアカウント</Text>
        <Pressable onPress={onPressBell}>
          <Icon name="bell" size={30} />
        </Pressable>
        <Pressable onPress={onPressGear}>
          <Icon name="gear" size={30} />
        </Pressable>
      </View>
      <View style={styles.userName}>
        <Text style={styles.nameText}>名前：{userName}</Text>
      </View>
      <View style={styles.card}>
        <Swiper showsButtons={true}>
          <View style={styles.page}>
            <View style={styles.pageContent}>
              <Text style={styles.focusPeriod}>今日</Text>
              <Text style={styles.amount}>￥13,367-</Text>
              <View style={styles.btnShowDataWrap}>
                <Pressable style={styles.btnShowData} onPress={onPressShowData}>
                  <Text>データを見る</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.page}>
            <View style={styles.pageContent}>
              <Text style={styles.focusPeriod}>今週</Text>
              <Text style={styles.amount}>￥793,602-</Text>
              <View style={styles.btnShowDataWrap}>
                <Pressable style={styles.btnShowData} onPress={onPressShowData}>
                  <Text>データを見る</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.page}>
            <View style={styles.pageContent}>
              <Text style={styles.focusPeriod}>今月</Text>
              <Text style={styles.amount}>￥2,089,261-</Text>
              <View style={styles.btnShowDataWrap}>
                <Pressable style={styles.btnShowData} onPress={onPressShowData}>
                  <Text>データを見る</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Swiper>
      </View>
      <View></View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "80%",
    marginTop: 30,
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  header_title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  userName: {
    width: "80%",
    margin: 30,
  },
  nameText: {
    fontSize: 20,
  },
  card: {
    width: "85%",
    height: 250,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d2d2d2",
    backgroundColor: "#c4e9f6",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  page: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pageContent: {
    width: "80%",
    height: "90%",
  },
  focusPeriod: {
    fontWeight: "bold",
    fontSize: 25,
    borderBottomWidth: 3,
  },
  amount: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: 20,
    textAlign: "right",
  },
  btnShowDataWrap: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btnShowData: {
    width: "80%",
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#d2d2d2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyAccountPage;
